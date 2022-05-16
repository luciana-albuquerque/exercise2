"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./ingredientCard.scss");
function IngredientCard({ name, img, description }) {
    return (<article className='ingredient'>
        <img src={img} alt={name}></img>
        <h4>{name}</h4>
        <p>{description}</p>
    </article>);
}
exports.default = IngredientCard;
