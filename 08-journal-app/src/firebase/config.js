// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnviroments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnviroments();
// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyDed5DS_t9kTaezHOgpBpeZJHyyjjbEjB8",
//   authDomain: "react-fer-her.firebaseapp.com",
//   projectId: "react-fer-her",
//   storageBucket: "react-fer-her.appspot.com",
//   messagingSenderId: "668090560685",
//   appId: "1:668090560685:web:e6869c5b4968045ced9624"
// };

// Test
const firebaseConfig = {
  apiKey: "AIzaSyChyLPSBDu7wzQccWvE-tZoezVv2WPe6PM",
  authDomain: "react-my-burger-a01b3.firebaseapp.com",
  databaseURL: "https://react-my-burger-a01b3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-my-burger-a01b3",
  storageBucket: "react-my-burger-a01b3.appspot.com",
  messagingSenderId: "729923226809",
  appId: "1:729923226809:web:12bf8b1caea313536adf68",
  measurementId: "G-159R130ZSV"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);