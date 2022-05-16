import React, { ReactElement } from "react";
import { ProductT } from "../../../interfaces/shared";
import { GrClose } from "react-icons/gr";
import "./productDisplay.scss";

type ProductDisplayT = {
  list: ProductT[];
  show: () => void;
};

export default function ProductDisplay({ list, show }: ProductDisplayT): ReactElement {
  return (
    <div className="productDisplay">
      <GrClose size={12} style={{ color: "$primaryColor", alignSelf: "flex-end", marginRight:"30px", cursor: "pointer"}} onClick={() => show()}/>
      {list.length === 0 ? (
        <p>Sorry! No products found</p>
      ) : (
        list.map((item) => (
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