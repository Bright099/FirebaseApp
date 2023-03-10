import Profile from "./profile";
import Signup from "./signUp";
import app from "./firebase";
import Homepage from "./homepage";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyD6oUPmXIvDpU0soh7ZNEFDkAQvLgJtCcY",
    authDomain: "profile-account-931d0.firebaseapp.com",
    projectId: "profile-account-931d0",
    storageBucket: "profile-account-931d0.appspot.com",
    messagingSenderId: "1090670497602",
    appId: "1:1090670497602:web:49e6f0df0fc6ebbd0e02db",
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const colRef = collection(db, "accounts");

  getDocs(colRef).then((snapshot) => {
    let accounts = [];
    snapshot.docs.forEach((doc) => {
      accounts.push({ ...doc.data() });
    });
    console.log(accounts);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="signup" element={<Signup />} />
        <Route path="homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
