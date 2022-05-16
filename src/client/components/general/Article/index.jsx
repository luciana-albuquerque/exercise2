"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("../Button"));
require("./article.scss");
function Article({ title1, title2, text, button }) {
    return (<article className='article'>
        <h1> {title1} <br /> {title2} </h1>
        <p> {text} </p>
        <Button_1.default text={button}/>
    </article>);
}
exports.default = Article;
