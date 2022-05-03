import React from "react";
import { Button, Tag } from "../../index";
import "./productCard.scss";

function ProductCard({ title, description, price, img, alt, tag }) {
  
  return (
    <article className="product">
      {tag && <Tag text={tag.text} theme={tag.theme} />}
      <img src={img} alt={alt} className="product-img"></img>
      <h6>{title}</h6>
      <p>{description}</p>
      <p className="price">${price}</p>
      <Button text="Add to cart" icon={true} />
    </article>
  );
}

export default ProductCard;
