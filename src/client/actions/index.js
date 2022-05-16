"use strict";
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
exports.fetchProducts = exports.getCartProducts = exports.addProduct = void 0;
const axios_1 = __importDefault(require("axios"));
const addProduct = (productId) => {
    return {
        type: "ADD_PRODUCT",
        payload: productId,
    };
};
exports.addProduct = addProduct;
const getCartProducts = () => {
    let cartLS = JSON.parse(localStorage.getItem("cart"));
    if (cartLS) {
        return {
            type: "GET_PRODUCTS",
            payload: cartLS,
        };
    }
    return {
        type: "GET_PRODUCTS",
        payload: [],
    };
};
exports.getCartProducts = getCartProducts;
/* interface DispatchT {({type: string, payload?: any} ): void} */
const fetchProducts = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({ type: "api/fetchProducts_request" });
        try {
            const response = yield axios_1.default.get("https://fakestoreapi.com/products");
            dispatch({ type: "api/fetchProducts_success", payload: response.data });
        }
        catch (error) {
            dispatch({ type: "api/fetchProducts_failure", error });
        }
    });
};
exports.fetchProducts = fetchProducts;
