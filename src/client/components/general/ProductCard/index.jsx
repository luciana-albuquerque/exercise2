"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const actions_1 = require("../../../actions");
const index_1 = require("../../index");
require("./productCard.scss");
function ProductCard({ id, title, description, price, image, category }) {
    const dispatch = (0, react_redux_1.useDispatch)();
    return (<article className="product">
      {(category === "jewelery" || title.includes("Women")) && (<index_1.Tag text={category === "jewelery" ? "New!" : "15% off"} theme={category === "jewelery" ? "blue" : "beige"}/>)}
      <div className="product-img">
        <img src={image} alt={category}/>
      </div>
      <h6>{title}</h6>
      <p>{description}</p>
      <p className="price">${price}</p>
      <index_1.Button text="Add to cart" icon={true} onClick={() => dispatch((0, actions_1.addProduct)(id))}/>
    </article>);
}
exports.default = ProductCard;
