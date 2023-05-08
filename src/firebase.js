// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMxl8bG-5W4kktTMAQ1_-y9P8IXRB4yeM", 
  authDomain: "app101-3287a.firebaseapp.com",
  projectId: "app101-3287a",
  storageBucket: "app101-3287a.appspot.com",
  messagingSenderId: "1090918688801",
  appId: "1:1090918688801:web:b4b99f07a325c646571b60",
  measurementId: "G-Z9BYLPDZ2P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
