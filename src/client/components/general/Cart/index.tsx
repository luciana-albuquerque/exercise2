import { useState, useEffect, ReactElement } from "react";
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

  const list: ProductT[] = allProducts.filter((item) => {
    return cart.some((idsOnCart) => {
      return idsOnCart === item.id;
    });
  });

  useEffect(() => {
    console.log('use effect')
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
        {showCart && <ProductDisplay list={list} show={handleCart} />}
        {console.log('list' , list)}
    </button>
  );
}