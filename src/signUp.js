import { ReactComponent as SignUp } from "./signup.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { documentId } from "firebase/firestore";
import { ReactComponent as Lock } from "./lock.svg";
import { useState } from "react";
const Signup = () => {
  const auth = getAuth();
  const [error, setError] = useState();
  const handleSubmit = (event) => {
    if (
      document.getElementById("signuppassword").value ===
      document.getElementById("confirmpassword").value
    ) {
      event.preventDefault();
      const form = event.target;
      const email = document.getElementById("signupmail").value;
      const password = document.getElementById("signuppassword").value;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User created:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(
            `Error registering user: ${errorCode} - ${errorMessage}`
          );
        });
    } else {
      console.log("please input the same password");
      event.preventDefault();
      setError("please input the same password");
      document.querySelector(".errormsg").style.display = "grid";
    }
  };

  return (
    <div className="signupBody">
      <div className="vector2"></div>
      <div className="signup">
        <div className="signup-content">
          <h2 className="signuph2">SIGN UP</h2>
          <form id="signup" onSubmit={handleSubmit}>
            <p className="errormsg">{error}</p>
            <div className="email" name="email">
              <label htmlFor="signupmail"></label>
              <input type="text" id="signupmail" required></input>
            </div>
            <div className="passwordSignup" name="password">
              <label htmlFor="signuppassword"></label>
              <input type="password" id="signuppassword" required />
            </div>
            <div className="confirmp">
              <label htmlFor="confirmpassword"></label>
              <input type="password" id="confirmpassword" requires />
            </div>
            <div className="btnsignup">
              <button className="signup-button" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
