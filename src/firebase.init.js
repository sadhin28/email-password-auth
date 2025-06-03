// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAJ7LNyQpTOmWrFN8xvQN9YEvCSAacXiEE",
  authDomain: "email-password-auth-ca810.firebaseapp.com",
  projectId: "email-password-auth-ca810",
  storageBucket: "email-password-auth-ca810.firebasestorage.app",
  messagingSenderId: "37001521940",
  appId: "1:37001521940:web:fe6edec43a782d6e2ab001",
  measurementId: "G-J5EDF3FBBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);