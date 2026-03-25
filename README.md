<div align="center">

<h1>🤖 InterviewForge.AI</h1>

<p><strong>AI-Powered Mock Interview Platform for Students & Job Seekers</strong></p>

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Now-4F46E5?style=for-the-badge)](https://ai-interview-agent-1-client.onrender.com)
[![GitHub Stars](https://img.shields.io/github/stars/SaiRupesh07/AI_Interview_Agent?style=for-the-badge&color=FFD700)](https://github.com/SaiRupesh07/AI_Interview_Agent/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/SaiRupesh07/AI_Interview_Agent?style=for-the-badge&color=0EA5E9)](https://github.com/SaiRupesh07/AI_Interview_Agent/forks)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)

<br/>

<img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />

<br/><br/>

> **InterviewForge.AI** is an intelligent mock interview platform that analyzes your resume, generates role-specific interview questions, evaluates your answers in real-time using LLMs, and delivers a detailed performance report — all in one seamless experience.

</div>

---

## 📸 Screenshots


> <img width="1890" height="904" alt="image" src="https://github.com/user-attachments/assets/9b746448-a84e-4bea-9e19-67e4c6c1b203" />


---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 **AI Smart Interview** | Resume-based question generation tailored to your role |
| 🔐 **Google OAuth** | Secure sign-in via Firebase + JWT session management |
| 📄 **Resume Upload & Parsing** | AI reads and extracts context from your resume |
| ⚡ **Real-time Evaluation** | Answers evaluated instantly using LLM APIs |
| 📊 **Performance Report** | Final score, analytics, and detailed AI feedback |
| 🗂️ **Interview History** | Save and review past interview sessions |
| 💳 **Credit-based System** | Pay-as-you-go model with Razorpay integration |
| 🛡️ **Protected Routes** | Auth middleware secures all sensitive endpoints |
| 📱 **Responsive UI** | Fully mobile-friendly with smooth animations |

---

## 🎯 How It Works

```
1. Sign in with Google OAuth
         ↓
2. Upload your resume (PDF/DOCX)
         ↓
3. AI analyzes resume → generates role-specific questions
         ↓
4. Answer questions step-by-step in the interview flow
         ↓
5. Backend evaluates each answer using LLM APIs
         ↓
6. View final performance report with score & feedback
         ↓
7. Interview saved to history for future review
```

---

## 🛠️ Tech Stack

### 💻 Frontend
| Technology | Purpose |
|---|---|
| React.js (Vite) | UI framework |
| Tailwind CSS | Styling |
| Redux Toolkit | State management |
| Axios | HTTP client |
| Framer Motion | Animations |

### ⚙️ Backend
| Technology | Purpose |
|---|---|
| Node.js + Express.js | REST API server |
| MongoDB (Mongoose) | Database |
| JWT | Authentication tokens |
| Multer | File upload handling |

### 🤖 AI / Auth / Payments
| Technology | Purpose |
|---|---|
| OpenRouter LLM APIs | Question generation & answer evaluation |
| Firebase Google OAuth | User authentication |
| Razorpay | Payment gateway |

### ☁️ Deployment
| Service | Purpose |
|---|---|
| Render (Frontend) | Client hosting |
| Render (Backend) | API server hosting |
| MongoDB Atlas | Cloud database |

---

## 📁 Project Structure

```
AI_Interview_Agent/
│
├── client/                        # ⚛️  React Frontend (Vite)
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── pages/                 # Route-level pages
│   │   ├── store/                 # Redux Toolkit slices
│   │   ├── hooks/                 # Custom React hooks
│   │   └── utils/                 # Helper functions
│   └── .env                       # Frontend environment variables
│
├── server/                        # 🟢  Express Backend
│   ├── controllers/               # Route handler logic
│   ├── middlewares/               # Auth & error middleware
│   ├── models/                    # Mongoose schemas
│   ├── routes/                    # API route definitions
│   ├── services/                  # AI, payment, file services
│   ├── public/                    # Resume uploads storage
│   └── .env                       # Backend environment variables
│
└── README.md
```

## 📦 Key Modules

```
⭐ Resume Analyzer API          — Parses resume and extracts role context
⭐ Interview Question Generator — LLM-powered role-specific Q&A generation
⭐ Answer Evaluation Engine     — Scores and provides AI feedback per answer
⭐ Performance Report System    — Aggregates scores into a final report
⭐ Credit & Payment Management  — Tracks usage credits + Razorpay top-up
⭐ Secure Auth Middleware       — JWT + Firebase session verification
```

---

## 🔮 Roadmap

- [x] Resume-based AI interview generation
- [x] Real-time answer evaluation
- [x] Performance report & history tracking
- [x] Credit-based payment system
- [ ] 🎤 Voice-based Interview (Speech-to-Text)
- [ ] 🎥 Video Interview Recording & Playback
- [ ] 📈 Advanced Analytics Dashboard
- [ ] 🧾 ATS Resume Score Checker
- [ ] 🧑‍💼 Recruiter / Admin Panel
- [ ] 🏆 Gamified Leaderboard & Achievements

---

## 👨‍💻 Author

<div align="center">

**Devarinti Sai Rupesh**

🎓 National Institute of Technology Patna
💼 Full Stack + AI Developer

[![GitHub](https://img.shields.io/badge/GitHub-SaiRupesh07-181717?style=for-the-badge&logo=github)](https://github.com/SaiRupesh07)

</div>

---

<div align="center">

### ⭐ If this project helped you, give it a star — it means a lot!

[![Star this repo](https://img.shields.io/github/stars/SaiRupesh07/AI_Interview_Agent?style=social)](https://github.com/SaiRupesh07/AI_Interview_Agent)

_Built with ❤️ by Sai Rupesh @ NIT Patna_

</div>
