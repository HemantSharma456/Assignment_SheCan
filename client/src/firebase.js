// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8RZA6Fl50n4q245XsbVOJXKjKmcHIrr8",
  authDomain: "she-can-222a4.firebaseapp.com",
  projectId: "she-can-222a4",
  storageBucket: "she-can-222a4.appspot.com",
  messagingSenderId: "968063295536",
  appId: "1:968063295536:web:b1ec9ee1bc5c887e3e8df5",
  measurementId: "G-TJ39EVH8DQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
