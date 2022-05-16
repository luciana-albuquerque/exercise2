"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./serviceCard.scss");
function ServiceCard({ img, description, link }) {
    return (<div className='service'>
        <img src={img} alt={description}></img>
        <p>{description}</p>
        <a href='#'>{link}</a>
    </div>);
}
exports.default = ServiceCard;
