const cartReducer = (state = [], action ) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            localStorage.setItem("cart", JSON.stringify([...state, action.payload]));
            return state = [...state, action.payload];

        case 'GET_PRODUCTS':
            return state = action.payload;    
            
        default:
            return state;
    }
}

export default cartReducer;