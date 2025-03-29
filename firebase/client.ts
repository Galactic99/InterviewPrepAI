// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import{ getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb0dbiQI6N4CrHzM3XeeJ4pHLqq6eeOtg",
  authDomain: "prepwiseai-8a6d8.firebaseapp.com",
  projectId: "prepwiseai-8a6d8",
  storageBucket: "prepwiseai-8a6d8.firebasestorage.app",
  messagingSenderId: "1056702285484",
  appId: "1:1056702285484:web:8b4b8f3a7ca2e9d7640109",
  measurementId: "G-FRJ7SVB394"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);