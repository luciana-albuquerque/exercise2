import React from "react";
import { Article, Banner, Catalogue, Campaign, Ingredients, Newsletter, Tag } from '../../index';
import { campaignClean, campaignNatural, articleHome } from "../../../utils/const";
import { images } from '../../../assets/images/index'
import "./landingPage.scss";

function LandingPage() {
  console.log (images)
  return (
    <div className="landingPage">
      <section className="home">
        <Tag text="New!" theme='white'/>
        <Article {...articleHome} />
      </section>
      <Banner />
      <Catalogue img={images.product1}/>
      <Campaign {...campaignClean} img={images.natural}/>
      <Catalogue />
      <Campaign {...campaignNatural}/>
      <Catalogue />
      <Ingredients />
      <Newsletter />
    </div>
  );
}

export default LandingPage;
