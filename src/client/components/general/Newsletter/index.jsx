"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./newsletter.scss");
const Button_1 = __importDefault(require("../Button"));
function Newsletter() {
    return (<section className="newsletter">
      <div className="content">
        <h2>Join the Sooth family</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <form>
        <input type="email"></input>
        <Button_1.default text="Subscribe"/>
      </form>
    </section>);
}
exports.default = Newsletter;
