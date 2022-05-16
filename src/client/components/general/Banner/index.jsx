"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./banner.scss");
function Banner() {
    return (<div className='banner'>
        <h3>Solutions for all skin</h3>
        <p>Explore our innovative skincare products</p>
    </div>);
}
exports.default = Banner;
