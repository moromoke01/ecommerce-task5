// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAigXMNMsZxr2IHEB4LqbHffD3MOQEM_50",
  authDomain: "e-commerce-website-28461.firebaseapp.com",
  projectId: "e-commerce-website-28461",
  storageBucket: "e-commerce-website-28461.appspot.com",
  messagingSenderId: "661784034103",
  appId: "1:661784034103:web:0a8b931e6631a7ad24b8b2",
  measurementId: "G-GKP80HZBNG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
