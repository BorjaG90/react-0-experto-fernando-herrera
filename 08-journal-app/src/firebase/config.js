// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDed5DS_t9kTaezHOgpBpeZJHyyjjbEjB8",
  authDomain: "react-fer-her.firebaseapp.com",
  projectId: "react-fer-her",
  storageBucket: "react-fer-her.appspot.com",
  messagingSenderId: "668090560685",
  appId: "1:668090560685:web:e6869c5b4968045ced9624"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);