import React, { ReactElement } from "react";
import { ProductT } from "../../../interfaces/shared";
import "./productDisplay.scss";

type ProductDisplayT = {
  list: ProductT[]
}

export default function ProductDisplay({ list }: ProductDisplayT): ReactElement {
  return (
    <div className="productDisplay">
      {list.length === 0 ? (
        <p>Sorry! No products found</p>
      ) : (
        <>
          {list.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt={item.category} className="product-img" />
              <div className="info">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
