import "./client/assets/styles/_styles.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer, LandingPage, LoginPage, RegisterPage, ContactPage } from './client/components/index'
import UserContext from "./client/context/UserContext";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import ContactDetails from "./client/components/views/Contact/ContactDetails";

function App() {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user?.isAnonymous === false) setIsLogged(true);
    if (!user) { setIsLogged(false) } 
  }, [user, isLogged, setIsLogged]);

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <LandingPage /> } />
          <Route exact path="/contact" element={ <ContactPage /> } />
          <Route exact path='/contact/:city' element={ <ContactDetails /> } />
          <Route path="/register" element={ !isLogged ? <RegisterPage /> : <Navigate to="/"/> } />
          <Route path="/login" element={ !isLogged ? <LoginPage /> : <Navigate to="/"/> } />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
