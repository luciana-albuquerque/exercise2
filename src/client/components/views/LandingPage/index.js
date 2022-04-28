import "./landingPage.scss";
import React from "react";
import Tag from "../../general/Tag/Tag";
import Article from "../../general/Article";
import Catalogue from "../../general/Catalogue";
import Campaign from "../../general/Campaign";
import Banner from "../../general/Banner";
import { campaignClean, campaignNatural, articleHome } from "../../../utils/const";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="home">
        <Tag text="New!" />
        <Article {...articleHome} />
      </div>
      <Banner />
      <Catalogue />
      <Campaign {...campaignClean} right={true} />
      <Catalogue />
      <Campaign {...campaignNatural} right={false}/>
      <Catalogue />
    </div>
  );
}

export default LandingPage;
