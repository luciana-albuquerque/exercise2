import React from "react";
import "./button.scss";
import cart from "../../../assets/images/shopping-cart.png";

function Button({ text, icon }) {
  return (
    <button>
      {icon && <img src={cart} alt="cart" className="icon" />}
      {text}
    </button>
  );
}

export default Button;
