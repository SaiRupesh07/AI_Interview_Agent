
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";    
 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-interview-44c7c.firebaseapp.com",
  projectId: "ai-interview-44c7c",
  storageBucket: "ai-interview-44c7c.firebasestorage.app",
  messagingSenderId: "609752584182",
  appId: "1:609752584182:web:9e5dc4492da020bdc881d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };