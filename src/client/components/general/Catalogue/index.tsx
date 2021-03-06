import React, { ReactElement } from "react";
import "./catalogue.scss";
import ProductCard from "../ProductCard";
import { ProductT } from "../../../interfaces/shared";

type CatalogueT = {
  ratingName: string,
  ratingList: ProductT[],
  beigeTheme?: boolean
}

function Catalogue({ ratingName, ratingList, beigeTheme }: CatalogueT ): ReactElement {

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
