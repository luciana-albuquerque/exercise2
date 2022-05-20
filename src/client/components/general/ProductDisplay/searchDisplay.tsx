import { ReactElement } from "react";
import { ProductDisplayT } from "../../../interfaces/shared";
import "./productDisplay.scss";

export default function ProductDisplay({ productsFound }: ProductDisplayT): ReactElement {
  return (
    <div className="productDisplay">
      {productsFound?.length === 0 ? (
        <p>Sorry! No products found</p>
      ) : (
        productsFound?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.category} className="product-img" />
            <div className="info">
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}