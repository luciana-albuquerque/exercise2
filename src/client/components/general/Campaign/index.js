import React from "react";
import "./campaign.scss";
import Article from "../Article";

function Campaign({ theme, article, image, alt }) {
  
  return (
    <section className="campaign">
      <div className="image-container">
        <img src={image} alt={alt}></img>
      </div>
      <div className={`content ${theme}`}>
        <Article {...article} />
      </div>
    </section>
  );
}

export default Campaign;
