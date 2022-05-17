import "./client/assets/styles/_styles.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./client/components/containers/Navbar";
import Footer from "./client/components/containers/Footer";
import LandingPage from "./client/components/views/LandingPage";
import LoginPage from "./client/components/views/AuthPages/LoginPage";
import RegisterPage from "./client/components/views/AuthPages/RegisterPage";
import UserContext from "./client/context/UserContext";
import { auth } from "./firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

/*   useEffect(() => {
    const authentication = getAuth();
    if (authentication.currentUser.isAnonymous === false) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
    console.log('is logged working?', isLogged)
  }, []); */

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
