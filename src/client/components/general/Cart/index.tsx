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
  const [cartList, setCartList] = useState([])

  const list: ProductT[] = allProducts.filter((item) => {
    return cart.some((idsOnCart) => {
      return idsOnCart === item.id;
    });
  });

  useEffect(() => {
    console.log('useEffect')
    dispatch(getCartProducts());
    if (list) {setCartList(list)}
  }, []);  

  return (
    <div className="cart">
        <button className="cartLink" onClick={handleCart}>CART</button>
        {cart?.length !== 0 && (
          <div className="quantity" onClick={handleCart}>
            <button className="cartBtn">{cart?.length}</button>
          </div>
        )}
        {showCart && <ProductDisplay list={cartList} show={handleCart} />}
        {console.log('list', cartList, list)}
    </div>
  );
}