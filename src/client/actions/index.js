import axios from "axios";

export const addProduct = (productId) => {
    return {
        type: 'ADD_PRODUCT',
        payload: productId
    };
}

export const fecthProducts = () => {
    return async (dispatch, getState) => {
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response.data)
        dispatch({
            type: 'api/fecthProducts',
            payload: response.data
        })
    }
}

/* dispatch({ type: 'api/fecthProducts_request' })

try {
    const response = await axios.get('https://fakestoreapi.com/products')
    dispatch({ type: 'api/fecthProducts_success', payload: response.data  })
} catch (error) {
    dispatch({ type: 'api/fecthProducts_failure', error })
}
} */