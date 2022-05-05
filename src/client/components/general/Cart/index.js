import React, { useState, useContext } from "react";
import CartContext from "../../../context/CartContext";
import ProductDisplay from "../ProductDisplay";
import "./Cart.scss";

export default function Cart() {
  const [cart] = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => setShowCart(!showCart);
  const allProducts = JSON.parse(localStorage.getItem("products"));

  const list = allProducts.filter((item) => {
    return cart.some((idsOnCart) => {
      return idsOnCart === item.id;
    });
  });

  return (
    <div className="cart">
      {cart?.length !== 0 && (
        <div className="quantity" onClick={handleCart}>
          <p>{cart?.length}</p>
        </div>
      )}
      {showCart && <ProductDisplay list={list} />}
    </div>
  );
}