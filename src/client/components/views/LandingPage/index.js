import React, { useEffect } from 'react'
import { Alert, Article, Banner, Catalogue, Campaign, Ingredients, Newsletter, Tag, ServicesOffer } from '../../index';
import { campaignClean, campaignNatural, articleHome } from "../../../utils/const";
import { images } from '../../../assets/images/index'
import "./landingPage.scss";
import { useDispatch, useSelector } from 'react-redux';
import { fecthProducts } from '../../../actions'

function LandingPage() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productsReducer)
  
/* const renderProducts = () => {
    if (data.loading) {
      return <h1>Loading</h1>
    }
    const productList = data.items
    return productList
  } */

  useEffect(() => {
    dispatch(fecthProducts())
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
