import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmXjXpibfIfejGsUCMyHK9UzklG4WhEmw",
  authDomain: "aitera-83486.firebaseapp.com",
  projectId: "aitera-83486",
  storageBucket: "aitera-83486.firebasestorage.app",
  messagingSenderId: "79405334766",
  appId: "1:79405334766:web:97181271dbb7538b0c73ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Google Authentication
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Firestore
export const db = getFirestore(app);
