import React from "react";
import "./productDisplay.scss";

export default function ProductDisplay({ list }) {

  return (
    <div className="productDisplay">
      
      {list.length === 0 ? <p>Sorry! No products found</p> :
      ( <>
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
