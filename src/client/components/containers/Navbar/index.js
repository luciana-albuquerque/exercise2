import { useState } from "react";
import "./navbar.scss";
import lupa from "../../../assets/images/lupa.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);

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
        <img src={lupa} alt="search"></img>
        <a href="#">CART</a>
        <a href="#">LOGIN</a>
      </div>
    </nav>
  );
}

export default Navbar;
