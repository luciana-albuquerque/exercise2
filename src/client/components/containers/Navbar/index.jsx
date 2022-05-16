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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const UserContext_1 = __importDefault(require("../../../context/UserContext"));
const Searchbar_1 = __importDefault(require("../../general/Searchbar"));
const Cart_1 = __importDefault(require("../../general/Cart"));
require("./navbar.scss");
const auth_1 = require("firebase/auth");
const firebase_config_1 = require("../../../../firebase-config");
const react_router_dom_1 = require("react-router-dom");
//Images
const gi_1 = require("react-icons/gi");
const gr_1 = require("react-icons/gr");
function Navbar() {
    const [user] = react_1.default.useContext(UserContext_1.default);
    const [openMenu, setOpenMenu] = (0, react_1.useState)(false);
    const handleClick = () => setOpenMenu(!openMenu);
    let navigate = (0, react_router_dom_1.useNavigate)();
    const logout = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        localStorage.removeItem("user");
        yield (0, auth_1.signOut)(firebase_config_1.auth);
        navigate("/login");
    });
    return (<nav className="navbar">
      <div className="hamburguer" onClick={handleClick}>
        {openMenu ? (<gr_1.GrClose size={20} style={{ color: "$primaryColor" }}/>) : (<gi_1.GiHamburgerMenu size={20} style={{ color: "$primaryColor" }}/>)}
        <a href="#">LOGIN</a>
      </div>
      <div className={openMenu ? "about active" : "about"}>
        <a href="#">ABOUT</a>
        <a href="#">CONSULTATION</a>
      </div>
      <div className="shop">
        <h2>sooth</h2>
        <ul>
          <li>
            <a href="#">Acne</a>
          </li>
          <li>
            <a href="#">Sun</a>
          </li>
          <li>
            <a href="#">Eczema</a>
          </li>
          <li>
            <a href="#">Psoriasis</a>
          </li>
          <li>
            <a href="#">Vitiligio</a>
          </li>
        </ul>
      </div>
      <div className={openMenu ? "account active" : "account"}>
        <Searchbar_1.default />
        <Cart_1.default />
        {(user === null || user === void 0 ? void 0 : user.email) ? (<a onClick={() => logout}>LOGOUT</a>) : (<a href="/login">LOGIN</a>)}
      </div>
    </nav>);
}
exports.default = Navbar;
