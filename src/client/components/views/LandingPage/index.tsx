import { useEffect, ReactElement } from "react";
import { Alert, Article, Banner, Catalogue, Campaign, Ingredients, Newsletter, Tag, ServicesOffer } from "../../index";
import { campaignClean, campaignNatural, articleHome } from "../../../utils/const";
import "./landingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../actions";
import { ProductT, StateT } from "../../../interfaces/shared";

function LandingPage(): ReactElement {
  const dispatch = useDispatch();
  const productList = useSelector((state: StateT) => state.productsReducer.items);
  const loading = useSelector((state: StateT) => state.productsReducer.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  // Rating classifications
  const mostPopular: ProductT[] = [...productList]
    .sort(function (a, b) {
      return a.rating.count - b.rating.count;
    })
    .splice(0, 4);

  const topRated: ProductT[] = [...productList]
    .sort(function (a, b) {
      return a.rating.rate - b.rating.rate;
    })
    .splice(0, 8);

  const recommended: ProductT[] = [...topRated].splice(0, 4);

  return (
    <main className="landingPage">
      <Alert />
      <section className="home">
        <Tag text="New!" theme="white" />
        <Article {...articleHome} />
      </section>
      <Banner />
      { loading ? <h1>Loading...</h1> : <Catalogue ratingName={"Most popular"} ratingList={mostPopular} /> }
      <Campaign {...campaignClean} />
      { loading ? <h1>Loading...</h1> : <Catalogue ratingName={"Top rated"} ratingList={topRated} />}
      <Campaign {...campaignNatural} />
      { loading ? <h1>Loading...</h1> : <Catalogue ratingName={"Recommended"} ratingList={recommended} beigeTheme />}
      <Ingredients />
      <ServicesOffer />
      <Newsletter />
    </main>
  );
}

export default LandingPage;
