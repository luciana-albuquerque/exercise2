"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./campaign.scss");
const Article_1 = __importDefault(require("../Article"));
function Campaign({ theme, article, image, alt }) {
    return (<section className="campaign">
      <div className="image-container">
        <img src={image} alt={alt}></img>
      </div>
      <div className={`content ${theme}`}>
        <Article_1.default {...article}/>
      </div>
    </section>);
}
exports.default = Campaign;
