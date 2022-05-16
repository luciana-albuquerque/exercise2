"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./productDisplay.scss");
function ProductDisplay({ list }) {
    return (<div className="productDisplay">
      {list.length === 0 ? (<p>Sorry! No products found</p>) : (list.map((item) => (<div className="item" key={item.id}>
            <img src={item.image} alt={item.category} className="product-img"/>
            <div className="info">
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </div>
          </div>)))}
    </div>);
}
exports.default = ProductDisplay;
