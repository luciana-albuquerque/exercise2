import axios from "axios";

export const addProduct = (productId: number) => {
  return {
    type: "ADD_PRODUCT",
    payload: productId,
  };
};

export const getCartProducts = () => {
  let cartLS = JSON.parse(localStorage.getItem("cart"));
  if (cartLS) {
    console.log('cartLS on actions', cartLS)
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

/* interface DispatchT {({type: string, payload?: any} ): void} */

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "api/fetchProducts_request" });

    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: "api/fetchProducts_success", payload: response.data });
    } catch (error) {
      dispatch({ type: "api/fetchProducts_failure", error });
    }
  };
};