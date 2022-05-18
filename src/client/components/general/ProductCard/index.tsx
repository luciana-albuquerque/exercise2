import { ReactElement } from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../actions';
import { Button, Tag } from "../../index";
import "./productCard.scss";
import { ProductT } from "../../../interfaces/shared";

function ProductCard({ id, title, description, price, image, category }: ProductT): ReactElement {
  const dispatch = useDispatch();
  
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
      <Button text="Add to cart" icon={true} onClick={() => dispatch(addProduct(id))} />
    </article>
  );
}

export default ProductCard;
