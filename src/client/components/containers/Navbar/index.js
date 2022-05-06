import { useState, useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import CartContext from "../../../context/CartContext";
import Searchbar from "../../general/Searchbar";
import Cart from "../../general/Cart";
import "./navbar.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase-config";

//Images
import lupa from "../../../assets/images/lupa.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


function Navbar() {
  const [user] = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);

  const logout = async () => {
    await signOut(auth);
  };
  const [cart] = useContext(CartContext);
  const quantity = cart?.length;

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
        <Searchbar />
        <Cart quantity={quantity} />
        { user?.email ? <a onClick={logout}>LOGOUT</a> : <a href="/login">LOGIN</a>  }
        <p>{user?.email}</p>
      </div>
    </nav>
  );
}

export default Navbar;
