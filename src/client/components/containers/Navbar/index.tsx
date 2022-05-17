import React, { useState, useContext, ReactElement } from "react";
import { NavLink } from "react-router-dom";
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

  const logout = async () => {
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
        <NavLink to='/login'>
            LOGIN
          </NavLink>
      </div>
      <div className={openMenu ? "about active" : "about"}>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink to='/consultation'>CONSULTATION</NavLink>
      </div>
      <div className="shop">
        <h2>sooth</h2>
        <ul>
          <li>
          <NavLink to='/acne'>Acne</NavLink>
          </li>
          <li>
          <NavLink to='/sun'>Sun</NavLink>
          </li>
          <li>
          <NavLink to='/eczema'>Eczema</NavLink>
          </li>
          <li>
          <NavLink to='/psoriasis'>Psoriasis</NavLink>Psoriasis
          </li>
          <li>
            <NavLink to='/vitiligio'>Vitiligio</NavLink>
          </li>
        </ul>
      </div>
      <div className={openMenu ? "account active" : "account"}>
        <Searchbar />
        <Cart />
        {user?.email ? (
          <button className="btnLink" onClick={logout}>LOGOUT</button>
        ) : (
          <NavLink to='/login'>
            LOGIN
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;