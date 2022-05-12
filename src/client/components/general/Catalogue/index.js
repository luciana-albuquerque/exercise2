import React from "react";
import "./catalogue.scss";
import ProductCard from "../ProductCard";

function Catalogue({ ratingName, ratingList, beigeTheme }) {

  return (
    <div className={`catalogue ${beigeTheme ? "beigeTheme" : ""}`}>
      <section>
        <div className="menu">
          <a href="#">{ratingName}</a>
          <a href="#">Shop all products</a>
        </div>

        <div className="products">
          {ratingList.map((filtered) => {
            return (
              <ProductCard {...filtered} key={filtered.id} />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Catalogue;
