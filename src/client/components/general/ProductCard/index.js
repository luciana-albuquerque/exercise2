import React from "react";
import { Button, Tag } from "../../index";
import "./productCard.scss";

function ProductCard({ id, title, description, price, image, category, add }) {
  return (
    <article className="product">
      {(category === "jewelery" || title.includes("Women")) && (
        <Tag
          text={category === "jewelery" ? "New!" : "15% off"}
          theme={category === "jewelery" ? "blue" : "beige"}
        />
      )}
      <div className="product-img">
        <img src={image} alt={category} />
      </div>
      <h6>{title}</h6>
      <p>{description}</p>
      <p className="price">${price}</p>
      <Button text="Add to cart" icon={true} onClick={() => add(id)} />
    </article>
  );
}

export default ProductCard;
