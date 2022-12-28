import {
  getFirestore,
  collection,
  doc,
  addDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const facebookProvider = new FacebookAuthProvider();

const user = auth.currentUser;
export const functions = {
  db,
};
