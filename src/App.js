import "./client/assets/styles/_styles.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./client/components/containers/Navbar";
import Footer from "./client/components/containers/Footer";
import LandingPage from "./client/components/views/LandingPage";
import LoginPage from "./client/components/views/AuthPages/LoginPage";
import RegisterPage from "./client/components/views/AuthPages/RegisterPage";
import UserContext from "./client/context/UserContext";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import CartContext from "./client/context/CartContext";

function App() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) setCart(cartItems);
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <CartContext.Provider value={[cart, setCart]}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </CartContext.Provider>
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
