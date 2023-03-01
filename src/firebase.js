import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = () => {
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
  const auth = getAuth();

  const colRef = collection(db, "accounts");

  getDocs(colRef).then((snapshot) => {
    let accounts = [];
    snapshot.docs.forEach((doc) => {
      accounts.push({ ...doc.data() });
    });
    console.log(accounts);
  });

  const signupform = document.querySelector("#signup");
  signupform.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupform.email.value;
    const password = signupform.password.value;
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
      console.log("user created", cred.user);
      signupform.reset();
    });
  });
};

export default app;
