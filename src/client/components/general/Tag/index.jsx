"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./tag.scss");
function Tag({ text, theme }) {
    return (<div className={`tag ${theme}`}>{text}</div>);
}
exports.default = Tag;
