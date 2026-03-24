import express from "express";
import isAuth from "../middlewears/isAuth.js";
import { upload } from "../middlewears/multer.js";
import { analyzeResume, finishInterview, generateQuestion, getInterviewReport, getMyInterviews, submitAnswer } from "../controller/interview.controller.js";

const interviewRouter = express.Router();

interviewRouter.post( "/resume",isAuth,upload.single("resume"),analyzeResume);
interviewRouter.post("/generate-questions",isAuth,generateQuestion)
interviewRouter.post("/submit-answer",isAuth,submitAnswer)
interviewRouter.post("/finish",isAuth,finishInterview)

interviewRouter.get("/get-interview",isAuth,getMyInterviews)
interviewRouter.get("/report/:id",isAuth,getInterviewReport)

export default interviewRouter;