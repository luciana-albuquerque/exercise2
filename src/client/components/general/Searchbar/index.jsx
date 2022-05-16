"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ProductDisplay_1 = __importDefault(require("../ProductDisplay"));
require("./searchbar.scss");
const gr_1 = require("react-icons/gr");
const fa_1 = require("react-icons/fa");
const react_redux_1 = require("react-redux");
function Searchbar() {
    const [openSearch, setOpenSearch] = (0, react_1.useState)(false);
    const [query, setQuery] = (0, react_1.useState)('');
    const [productsFound, setProductsFound] = (0, react_1.useState)([]);
    function handleClick() {
        return setOpenSearch(!openSearch);
    }
    const allProducts = (0, react_redux_1.useSelector)((state) => state.productsReducer.items);
    const handleSearch = (input) => {
        setQuery(input);
        const filteredList = allProducts.filter((item) => item.title.toLowerCase().includes(input.toLowerCase()));
        setProductsFound(filteredList);
    };
    return (<div className="search">
      <div className="search-icon">
        {!openSearch ? (<div>
            <fa_1.FaSearch size={12} style={{ color: "$primaryColor" }} onClick={handleClick}/>
          </div>) : (<div>
            <input type="text" value={query} onChange={(e) => handleSearch(e.target.value)}></input>
            <gr_1.GrClose size={12} style={{ color: "$primaryColor" }} onClick={handleClick}/>
          </div>)}
      </div>
      {openSearch && (query.length !== 0 && <ProductDisplay_1.default list={productsFound}/>)}
    </div>);
}
exports.default = Searchbar;
