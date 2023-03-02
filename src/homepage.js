import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./signUp";

const Homepage = () => {
  const auth = getAuth();
  const firebaseConfig = {
    apiKey: "AIzaSyD6oUPmXIvDpU0soh7ZNEFDkAQvLgJtCcY",
    authDomain: "profile-account-931d0.firebaseapp.com",
    projectId: "profile-account-931d0",
    storageBucket: "profile-account-931d0.appspot.com",
    messagingSenderId: "1090670497602",
    appId: "1:1090670497602:web:49e6f0df0fc6ebbd0e02db",
  };
  initializeApp(firebaseConfig);
  const navigate = useNavigate();
  const docRef = doc(db, "accounts", MyContext.value);
  const db = getFirestore();
  const colRef = collection(db, "accounts");
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
      console.log("user signed out");
    });
  };
  return (
    <div className="homepage">
      <h2>welcome</h2>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
};

export default Homepage;
