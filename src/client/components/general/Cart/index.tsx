import { useState, useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../../actions";
import { StateT } from "../../../interfaces/shared";
import CartDisplay from "../ProductDisplay/cartDisplay"
import "./Cart.scss";

export default function Cart(): ReactElement {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => setShowCart(!showCart);
  const cart = useSelector((state: StateT) => state.cartReducer);

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);  
  
  return (
    <button className="cart" onClick={handleCart}>
      <p>CART</p>
      {cart?.length !== 0 && (
        <p className="quantity" >
          {cart?.length}
        </p>
      )}
      {showCart && <CartDisplay show={handleCart} />}
    </button>
  );
}