import React, { useState } from "react";
import "./authPages.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [confirmPwdError, setConfirmPwdError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let navigate = useNavigate();

  const emailRgx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const pwdRgx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const validate = () => {
    const emailVal = emailRgx.test(email);
    const pwdVal = pwdRgx.test(password);
    const confirmPwdVal = confirmPassword === password;

    setEmailErr(!emailVal);
    setPwdError(!pwdVal);
    setConfirmPwdError(!confirmPwdVal);

    return !emailVal || !pwdVal || !confirmPwdVal;
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      return;
    }
    register();
  };

  return (
    <main className="authPages">
      <div className="content">
        <h3>REGISTER</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {emailErr && <p className="errorMessage">Your email is invalid</p>}
          {pwdError && <p className="errorMessage">Your password is invalid</p>}
          {confirmPwdError && (
            <p className="errorMessage">Passwords do not match.</p>
          )}
          {errorMessage?.includes("already-in-use") && (
            <p className="errorMessage">Email already registered.</p>
          )}
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <a href="/login">Sign in here.</a>
        </p>
      </div>
    </main>
  );
}
