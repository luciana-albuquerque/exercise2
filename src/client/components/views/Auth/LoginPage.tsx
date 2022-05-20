import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import "./authPages.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import { useNavigate } from "react-router-dom";

export default function LoginPage(): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <main className="authPages">
      <div className="content">
        <h3>LOGIN</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage?.includes("user-not-found") && (
            <p className="errorMessage">User not registered</p>
          )}
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage?.includes("wrong") && (
            <p className="errorMessage">Email or password are invalid.</p>
          )}
          <button type="submit" className="button">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register now.</Link>
        </p>
      </div>
    </main>
  );
}
