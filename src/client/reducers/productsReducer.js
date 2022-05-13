const initState = {
    items: [],
    loading: false, 
    error: null
}

const productsReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'api/fetchProducts_request':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'api/fetchProducts_success':
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case 'api/fetchProducts_failure':
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