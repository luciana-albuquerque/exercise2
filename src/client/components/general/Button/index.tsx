import { ReactElement } from "react";
import "./button.scss";
import { images } from "../../../assets/images";
import { ButtonT } from "../../../interfaces/shared";

function Button({ text, icon, ...props }: ButtonT): ReactElement {
  return (
    <button className="button" {...props}>
      {icon && <img src={images.cart} alt="cart" className="icon" />}
      {text}
    </button>
  );
}

export default Button;
