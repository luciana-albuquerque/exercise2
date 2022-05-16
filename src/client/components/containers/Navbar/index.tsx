import React, { useState, useContext, ReactElement } from "react";
import UserContext from "../../../context/UserContext";
import Searchbar from "../../general/Searchbar";
import Cart from "../../general/Cart";
import "./navbar.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import { useNavigate } from "react-router-dom";

//Images
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

function Navbar(): ReactElement {
  const [user] =  React.useContext(UserContext);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);
  let navigate = useNavigate();

  const logout = async (e: React.FormEvent<HTMLInputElement> ): Promise<void> => {
    e.preventDefault();
    localStorage.removeItem("user");
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="hamburguer" onClick={handleClick}>
        {openMenu ? (
          <GrClose size={20} style={{ color: "$primaryColor" }} />
        ) : (
          <GiHamburgerMenu size={20} style={{ color: "$primaryColor" }} />
        )}
        <a href="#">LOGIN</a>
      </div>
      <div className={openMenu ? "about active" : "about"}>
        <a href="#">ABOUT</a>
        <a href="#">CONSULTATION</a>
      </div>
      <div className="shop">
        <h2>sooth</h2>
        <ul>
          <li>
            <a href="#">Acne</a>
          </li>
          <li>
            <a href="#">Sun</a>
          </li>
          <li>
            <a href="#">Eczema</a>
          </li>
          <li>
            <a href="#">Psoriasis</a>
          </li>
          <li>
            <a href="#">Vitiligio</a>
          </li>
        </ul>
      </div>
      <div className={openMenu ? "account active" : "account"}>
        <Searchbar />
        <Cart />
        {user?.email ? (
          <a   onClick={() => logout}>LOGOUT</a>
        ) : (
          <a href="/login">LOGIN</a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
