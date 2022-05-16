"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./servicesOffer.scss");
const ServiceCard_1 = __importDefault(require("../ServiceCard"));
const const_1 = require("../../../utils/const");
function ServicesOffer() {
    return (<section className='servicesOffer'>
      {const_1.services.map((item, index) => <react_1.default.Fragment key={index}>
          <ServiceCard_1.default {...item}/>
        </react_1.default.Fragment>)}
    </section>);
}
exports.default = ServicesOffer;
