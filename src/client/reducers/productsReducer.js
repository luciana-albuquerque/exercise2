const productsReducer = (state = [], action ) => {
    switch (action.type) {
        case 'api/fecthProducts':
            return action.payload
        default: return state;
    }
}

export default productsReducer;