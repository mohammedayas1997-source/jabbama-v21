import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Wannan sune bayanan da ka kwaso:
const firebaseConfig = {
  apiKey: "AIzaSyB4axv-27gf1z2LTEjMUmLs3u9PDh9cxZU",
  authDomain: "jabbama-v21.firebaseapp.com",
  projectId: "jabbama-v21",
  storageBucket: "jabbama-v21.firebasestorage.app",
  messagingSenderId: "273675779043",
  appId: "1:273675779043:web:24e7f9a7e259b050eafed6",
  measurementId: "G-8QVRSEM7QB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Muna fitar da (export) wadannan abubuwan don amfani a cikin Form dinmu
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
