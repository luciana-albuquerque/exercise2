import React from "react";
import { Button, Tag } from "../../index";
import "./productCard.scss";

function ProductCard({ id, title, description, price, image, category, add}) {
  
  return (
    <article className="product">
      {category === "jewelery" ? (
        <Tag text="New!" theme="blue" />
      ) : title.includes("Women") ? (
        <Tag text="15% off" theme="beige" />
      ) : "" }
      <div className="product-img">
        <img src={image} alt={category}  />
      </div>
      <h6>{title}</h6>
      <p>{description}</p>
      <p className="price">${price}</p>  
      <div onClick={() => add(id) }>
      <Button text="Add to cart" icon={true} />
      </div>
    </article>
  );
}

export default ProductCard;
