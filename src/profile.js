import { ReactComponent as Logo } from "./background.svg";
import { ReactComponent as Password } from "./password.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById("loginmail").value;
    const password = document.getElementById("loginpassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        navigate("homepage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error signing in: ${errorCode} - ${errorMessage}`);
      });
  };
  return (
    <div className="form-login">
      <div className="login">
        <div className="vector"></div>
        <div className="login-content">
          <form onSubmit={handleLogin}>
            <label className="title">MEMBER LOGIN</label>
            <div className="email-username">
              <input
                type="text"
                placeholder="Email or Username"
                id="loginmail"
              ></input>
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Password"
                id="loginpassword"
              ></input>
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            <p className="sign-up-link">
              <Link to="signup">Create New Account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
