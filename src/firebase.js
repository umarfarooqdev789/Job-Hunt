import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt75G3mHa6dMpOnCaB5EjuLCNeAQfC4J0",
  authDomain: "job-hunt-ea8a1.firebaseapp.com",
  projectId: "job-hunt-ea8a1",
  messagingSenderId: "555584754384",
  appId: "1:555584754384:web:bf656c2194c61fb3d284d5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();