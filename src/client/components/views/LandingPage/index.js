import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Alert, Article, Banner, Catalogue, Campaign, Ingredients, Newsletter, Tag, ServicesOffer } from '../../index';
import { campaignClean, campaignNatural, articleHome } from "../../../utils/const";
import { images } from '../../../assets/images/index'
import "./landingPage.scss";

function LandingPage() {
  const [productList, setproductList] = useState([])
 
  const getData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setproductList(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()  
  }, [])

  //Saving in local storage
  localStorage.setItem('products', JSON.stringify(productList));
  const products = JSON.parse(localStorage.getItem('products'));
  
  // Rating classifications
  const mostPopular = products.sort(function (a, b) {
    return a.rating.count - b.rating.count;
  }).splice(0,4);

  const topRated = products.sort(function (a, b) {
    return a.rating.rate - b.rating.rate;
  }).splice(0,8);

  const recommended = [...topRated].splice(0,4);

  return (
    <main className="landingPage">
      <Alert />
      <section className="home">
        <Tag text="New!" theme='white'/>
        <Article {...articleHome} />
      </section>
      <Banner />
      <Catalogue ratingName={"Most popular"} ratingList={mostPopular} />
      <Campaign {...campaignClean} img={images.natural}/>
      <Catalogue ratingName={"Top rated"} ratingList={topRated} />
      <Campaign {...campaignNatural}/>
      <Catalogue ratingName={"Recommended"} ratingList={recommended} beigeTheme />
      <Ingredients />
      <ServicesOffer />
      <Newsletter />
    </main>
  );
}

export default LandingPage;
