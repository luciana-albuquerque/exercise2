import React, { ReactElement } from "react";
import "./button.scss";
import cart from "../../../assets/images/shopping-cart.png";
import { ButtonT } from "../../../interfaces/shared";

function Button({ text, icon, ...props }: ButtonT): ReactElement {
  return (
    <button {...props}>
      {icon && <img src={cart} alt="cart" className="icon" />}
      {text}
    </button>
  );
}

export default Button;
