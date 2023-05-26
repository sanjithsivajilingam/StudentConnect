import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClRnuil0DmUzn94IqS2UL1B_1Kf-BQus0",
  authDomain: "hackathon-503ac.firebaseapp.com",
  projectId: "hackathon-503ac",
  storageBucket: "hackathon-503ac.appspot.com",
  messagingSenderId: "184682820314",
  appId: "1:184682820314:web:9f69e9f0c74a8b4968ebe3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();