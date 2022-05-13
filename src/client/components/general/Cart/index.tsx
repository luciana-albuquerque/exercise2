import React, { useState, useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../../actions";
import { ProductT, StateT } from "../../../interfaces/shared";
import ProductDisplay from "../ProductDisplay";
import "./Cart.scss";

export default function Cart(): ReactElement {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => setShowCart(!showCart);
  const cart = useSelector((state: StateT) => state.cartReducer);
  const allProducts = useSelector((state: StateT) => state.productsReducer.items);

  const list = allProducts.filter((item) => {
    return cart.some((idsOnCart) => {
      return idsOnCart === item.id;
    });
  });

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  return (
    <div className="cart">
      <>
        {console.log('allproducts', allProducts)}
        <a href="#">CART</a>
        {cart?.length !== 0 && (
          <div className="quantity" onClick={handleCart}>
            <p>{cart?.length}</p>
          </div>
        )}
        {showCart && <ProductDisplay list={list} />}
      </>
    </div>
  );
}
