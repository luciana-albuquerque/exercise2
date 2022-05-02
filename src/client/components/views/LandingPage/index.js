import React from "react";
import { Alert, Article, Banner, Catalogue, Campaign, Ingredients, Newsletter, Tag, ServicesOffer } from '../../index';
import { campaignClean, campaignNatural, articleHome } from "../../../utils/const";
import { images } from '../../../assets/images/index'
import "./landingPage.scss";

function LandingPage() {
  
  return (
    <div className="landingPage">
      <Alert />
      <section className="home">
        <Tag text="New!" theme='white'/>
        <Article {...articleHome} />
      </section>
      <Banner />
      <Catalogue category={"Most popular"} />
      <Campaign {...campaignClean} img={images.natural}/>
      <Catalogue category={"Top rated"} />
      <Campaign {...campaignNatural}/>
      <Catalogue category={"Recommended"} beigeTheme />
      <Ingredients />
      <ServicesOffer />
      <Newsletter />
    </div>
  );
}

export default LandingPage;
