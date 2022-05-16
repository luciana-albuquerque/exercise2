"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const index_1 = require("../../index");
const const_1 = require("../../../utils/const");
require("./landingPage.scss");
const react_redux_1 = require("react-redux");
const actions_1 = require("../../../actions");
function LandingPage() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const productList = (0, react_redux_1.useSelector)((state) => state.productsReducer.items);
    const loading = (0, react_redux_1.useSelector)((state) => state.productsReducer.loading);
    (0, react_1.useEffect)(() => {
        dispatch((0, actions_1.fetchProducts)());
    }, []);
    // Rating classifications
    const mostPopular = productList
        .sort(function (a, b) {
        return a.rating.count - b.rating.count;
    })
        .splice(0, 4);
    const topRated = productList
        .sort(function (a, b) {
        return a.rating.rate - b.rating.rate;
    })
        .splice(0, 8);
    const recommended = [...topRated].splice(0, 4);
    return (<main className="landingPage">
      <index_1.Alert />
      <section className="home">
        <index_1.Tag text="New!" theme="white"/>
        <index_1.Article {...const_1.articleHome}/>
      </section>
      <index_1.Banner />
      {loading ? <h1>Loading...</h1> : <index_1.Catalogue ratingName={"Most popular"} ratingList={mostPopular}/>}
      <index_1.Campaign {...const_1.campaignClean}/>
      {loading ? <h1>Loading...</h1> : <index_1.Catalogue ratingName={"Top rated"} ratingList={topRated}/>}
      <index_1.Campaign {...const_1.campaignNatural}/>
      {loading ? <h1>Loading...</h1> : <index_1.Catalogue ratingName={"Recommended"} ratingList={recommended} beigeTheme/>}
      <index_1.Ingredients />
      <index_1.ServicesOffer />
      <index_1.Newsletter />
    </main>);
}
exports.default = LandingPage;
