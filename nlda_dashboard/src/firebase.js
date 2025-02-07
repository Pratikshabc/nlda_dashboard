import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA78KzcX_4oj6C64qY9p_2_P3q_EegEofI",
    authDomain: "hackathon-75da0.firebaseapp.com",
    projectId: "hackathon-75da0",
    storageBucket: "hackathon-75da0.firebasestorage.app",
    messagingSenderId: "438278661226",
    appId: "1:438278661226:web:ddc790e9ec1bfc20f8d613",
    measurementId: "G-890K22NPFV"
  };  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
