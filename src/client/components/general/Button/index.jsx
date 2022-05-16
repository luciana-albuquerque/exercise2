"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./button.scss");
const shopping_cart_png_1 = __importDefault(require("../../../assets/images/shopping-cart.png"));
function Button(_a) {
    var { text, icon } = _a, props = __rest(_a, ["text", "icon"]);
    return (<button {...props}>
      {icon && <img src={shopping_cart_png_1.default} alt="cart" className="icon"/>}
      {text}
    </button>);
}
exports.default = Button;
