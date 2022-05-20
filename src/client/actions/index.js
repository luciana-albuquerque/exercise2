import axios from "axios";

export const addProduct = (productId) => {
  return {
    type: "ADD_PRODUCT",
    payload: productId,
  };
};

export const removeProduct = (productId) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: productId,
  };
};

export const getCartProducts = () => {
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

//thunk middleware
export const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_PRODUCTS_FAILURE", error });
    }
  };
};