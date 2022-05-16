"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./catalogue.scss");
const ProductCard_1 = __importDefault(require("../ProductCard"));
function Catalogue({ ratingName, ratingList, beigeTheme }) {
    return (<div className={`catalogue ${beigeTheme ? "beigeTheme" : ""}`}>
      <section>
        <div className="menu">
          <a href="#">{ratingName}</a>
          <a href="#">Shop all products</a>
        </div>

        <div className="products">
          {ratingList.map((filtered) => {
            return (<ProductCard_1.default {...filtered} key={filtered.id}/>);
        })}
        </div>
      </section>
    </div>);
}
exports.default = Catalogue;
