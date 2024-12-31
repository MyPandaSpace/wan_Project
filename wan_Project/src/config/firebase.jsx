// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 導入firebase的auth
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQOI2rPO1tkcKdiggfipPFtDyQpiYxZUs",
    authDomain: "react-auth-8ce11.firebaseapp.com",
    projectId: "react-auth-8ce11",
    storageBucket: "react-auth-8ce11.firebasestorage.app",
    messagingSenderId: "189841644569",
    appId: "1:189841644569:web:e9a35b04a704db486f1e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 匯出
export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();