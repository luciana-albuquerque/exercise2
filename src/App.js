import { useState } from "react";
import "./client/assets/styles/_styles.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./client/components/containers/Navbar";
import Footer from "./client/components/containers/Footer";
import LandingPage from "./client/components/views/LandingPage";
import LoginPage from "./client/components/views/LoginPage";
import RegisterPage from "./client/components/views/RegisterPage";
import AuthContext from "./client/context/AuthContext";
import {auth} from './firebase-config'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <div className="App">
    <AuthContext.Provider value={[user, setUser]}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </AuthContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
