import React, { ReactElement } from "react";
import "./campaign.scss";
import Article from "../Article";
import { ArticleT } from "../../../interfaces/shared";

type CampaignT = {
  theme: string, 
  article: ArticleT, 
  image: string, 
  alt?: string
}

function Campaign({ theme, article, image, alt }: CampaignT): ReactElement {
  
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
