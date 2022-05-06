import React, { useState } from "react";
import "./loginPage.scss";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../../firebase-config";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <main className="loginPage">
      <div className="login">
        <h3>LOGIN</h3>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Log In</button>
        <button onClick={logout}>Log Out</button>
        <p>
          Don't have an account? <a href="/register">Register now.</a>
        </p>
      </div>
    </main>
  );
}
