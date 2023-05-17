import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0s30zyf8gG2I1oCqRPa3WdgdF34o7hV4",
  authDomain: "chat-app-99bff.firebaseapp.com",
  projectId: "chat-app-99bff",
  storageBucket: "chat-app-99bff.appspot.com",
  messagingSenderId: "652566115716",
  appId: "1:652566115716:web:45467c0629ab71e53799d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
