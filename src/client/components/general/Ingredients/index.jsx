"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./ingredients.scss");
const const_1 = require("../../../utils/const");
const IngredientCard_1 = __importDefault(require("../IngredientCard"));
function Ingredient() {
    return (<section className="ingredientList">
      <h3>We use the best</h3>
      <p>Explore our innovative skincare products</p>
      <div className="list">
        {const_1.ingredients.map((item, index) => (<react_1.default.Fragment key={index}>
            <IngredientCard_1.default {...item}/>
          </react_1.default.Fragment>))}
      </div>
    </section>);
}
exports.default = Ingredient;
