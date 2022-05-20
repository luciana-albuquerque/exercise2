import { ReactElement, useEffect, useState } from "react";
import { ProductDisplayT, ProductT, StateT } from "../../../interfaces/shared";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { addProduct, removeProduct } from "../../../actions";
import "./productDisplay.scss";

export default function ProductDisplay({ show }: ProductDisplayT): ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const allProducts = useSelector((state: StateT) => state.productsReducer.items);
  const cart = useSelector((state: StateT) => state.cartReducer);

  const list: ProductT[] = [...allProducts].filter((item) => {
    return cart.some((idsOnCart) => {
      return Number(idsOnCart) === item.id;
    });
  });

  const myArray: Array<any> = [...cart].map(id => Number(id))
  
  const totalPrice = 
    [...list].reduce((acc, product) => {
  return acc + product.price;
}, 0);

  return (
    <div className="productDisplay">
      <header>
        <h4>Your Cart</h4>
        <p>{list.length + 1} items</p>
        <GrClose size={12} style={{ color: "$primaryColor", cursor: "pointer" }} onClick={show} />
      </header>
      {list.length === 0 ? (
        <p>No products</p>
      ) : (
        list.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.category} className="product-img" />
            <div className="info">
              <h6>{item.title}</h6>
              <p>{item.description}</p>
              <div className="quantities">
                <button onClick={() => dispatch(removeProduct(item.id))} className="btnLink">
                  -
                </button>
                <p>{myArray.count(item.id)}items</p>
                <button onClick={() => dispatch(addProduct(item.id))} className="btnLink">
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <h4>Subtotal - ${totalPrice}</h4>
     
    </div>
  );
}
