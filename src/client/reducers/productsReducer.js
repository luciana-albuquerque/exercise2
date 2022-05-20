const initState = {
    items: [],
    loading: false, 
    error: null
}

const productsReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
                items: []
            }
        default: 
            return state;
    }
}

export default productsReducer;