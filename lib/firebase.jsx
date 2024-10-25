import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJE6wJQ9H8XGPUGKQOleig-0_4cwXzSuQ",
  authDomain: "supernal-e-commerce.firebaseapp.com",
  projectId: "supernal-e-commerce",
  storageBucket: "supernal-e-commerce.appspot.com",
  messagingSenderId: "209017746245",
  appId: "1:209017746245:web:bdbd77c4f468a203f3442c",
  measurementId: "G-ZDF4X89T4H",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(app) : null
);

export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);
