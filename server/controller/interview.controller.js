import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { askAi } from "../services/openRouter.services.js";
import User from "../models/usermodel.js";
import Interview from "../models/interview.model.js";

export const analyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume required" });
    }

    const filepath = req.file.path;
    const fileBuffer = await fs.promises.readFile(filepath);
    const uint8Array = new Uint8Array(fileBuffer);
    const pdf = await pdfjsLib.getDocument({ data: uint8Array }).promise;

    let resumeText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const pageText = content.items.map((item) => item.str).join(" ");
      resumeText += pageText + "\n";
    }

    resumeText = resumeText.replace(/\s+/g, " ").trim();

    const messages = [
      {
        role: "system",
        content: `
Extract structured data from resume.

Return strictly JSON:

{
  "role": "string",
  "experience": "string",
  "projects": ["project1"],
  "skills": ["skill1"]
}
`,
      },
      { role: "user", content: resumeText },
    ];

    const aiResponse = await askAi(messages);
    const parsed = JSON.parse(aiResponse);

    fs.unlinkSync(filepath);

    res.json({
      role: parsed.role,
      experience: parsed.experience,
      projects: parsed.projects,
      skills: parsed.skills,
      resumeText,
    });
  } catch (error) {
    console.error(error);

    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    return res.status(500).json({ message: error.message });
  }
};

export const generateQuestion = async (req, res) => {
  try {
    let { role, experience, mode, resumeText, projects, skills } = req.body;

    role = role?.trim();
    experience = experience?.trim();
    mode = mode?.trim();

    if (!role || !experience || !mode) {
      return res.status(400).json({ message: "Role, Experience and Mode are required." });
    }

    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ message: "User not found." });

    if (user.credits < 50) {
      return res.status(400).json({ message: "Not enough credits. Minimum 50 required." });
    }

    const projectText = Array.isArray(projects) && projects.length ? projects.join(", ") : "None";
    const skillsText = Array.isArray(skills) && skills.length ? skills.join(", ") : "None";
    const safeResume = resumeText?.trim() || "None";

    const userPrompt = `
Role:${role}
Experience:${experience}
InterviewMode:${mode}
Projects:${projectText}
Skills:${skillsText}
Resume:${safeResume}
`;

    const messages = [
      {
        role: "system",
        content: `
You are a real human interviewer.
Generate exactly 5 interview questions.
Return one question per line.
`,
      },
      { role: "user", content: userPrompt },
    ];

    const aiResponse = await askAi(messages);

    const questionsArray = aiResponse
      .split("\n")
      .map((q) => q.trim())
      .filter((q) => q.length > 0)
      .slice(0, 5);

    user.credits -= 50;
    await user.save();

    const interview = await Interview.create({
      userId: user._id,
      role,
      experience,
      mode,
      resumeText: safeResume,
      questions: questionsArray.map((q, i) => ({
        question: q,
        difficulty: ["easy", "easy", "medium", "medium", "hard"][i],
        timeLimit: [60, 60, 90, 90, 120][i],
      })),
    });

    res.json({
      interviewId: interview._id,
      creditsLeft: user.credits,
      userName: user.name,
      questions: interview.questions,
    });
  } catch (error) {
    return res.status(500).json({ message: `failed to create interview ${error}` });
  }
};

export const submitAnswer = async (req, res) => {
  try {
    const { interviewId, questionIndex, answer, timeTaken } = req.body;

    const interview = await Interview.findById(interviewId);
    if (!interview) return res.status(400).json({ message: "Interview not found" });

    const question = interview.questions[questionIndex];
    if (!question) return res.status(400).json({ message: "Invalid question index" });

    if (!answer) {
      question.score = 0;
      question.feedback = "No answer submitted.";
      await interview.save();
      return res.json({ feedback: question.feedback });
    }

    const messages = [
      { role: "system", content: `Evaluate candidate answer and return JSON.` },
      { role: "user", content: `Question:${question.question}\nAnswer:${answer}` },
    ];

    const aiResponse = await askAi(messages);
    const parsed = JSON.parse(aiResponse);

    question.answer = answer;
    question.score = parsed.finalScore;
    question.feedback = parsed.feedback;
    question.confidence = parsed.confidence;
    question.communication = parsed.communication;
    question.correctness = parsed.correctness;

    await interview.save();

    return res.json({ feedback: parsed.feedback });
  } catch (error) {
    return res.status(500).json({ message: `failed to submit answer ${error}` });
  }
};

export const finishInterview = async (req, res) => {
  try {
    const { interviewId } = req.body;
    const interview = await Interview.findById(interviewId);

    let total = 0;
    interview.questions.forEach((q) => (total += q.score || 0));

    interview.finalScore = total / interview.questions.length;
    interview.status = "completed";

    await interview.save();

    return res.json({ finalScore: interview.finalScore });
  } catch (error) {
    return res.status(500).json({ message: `failed to finish Interview ${error}` });
  }
};

export const getMyInterviews = async (req, res) => {
  try {
    // ⭐⭐⭐ MAIN FIX HERE
    const interviews = await Interview.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .select("role experience mode finalScore status createdAt");

    return res.json(interviews);
  } catch (error) {
    return res.status(500).json({ message: `failed to get interviews ${error}` });
  }
};

export const getInterviewReport = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview) return res.status(404).json({ message: "Interview not found" });

    return res.json({
      finalScore: interview.finalScore,
      questionWiseScore: interview.questions,
    });
  } catch (error) {
    return res.status(500).json({ message: `failed to get report ${error}` });
  }
};