import React from "react";
import "./ingredients.scss";
import { ingredients } from "../../../utils/const";
import IngredientCard from "../IngredientCard";

export default function Ingredient() {
  
  return (
    <section className="ingredientList">
      <h3>We use the best</h3>
      <p>Explore our innovative skincare products</p>
      <div className="list">
        {ingredients.map((item, index) => (
          <React.Fragment key={index}>
            <IngredientCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
