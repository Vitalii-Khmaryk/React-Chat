import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALCvQ4YWLjAM1zjXC11qq_YxnkmJ3aa54",
  authDomain: "chat-43ab2.firebaseapp.com",
  projectId: "chat-43ab2",
  storageBucket: "chat-43ab2.appspot.com",
  messagingSenderId: "144878887070",
  appId: "1:144878887070:web:2f413fa19502d6ffb89b8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
