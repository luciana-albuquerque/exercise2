const cartReducer = (state = [], action ) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            localStorage.setItem("cart", JSON.stringify([...state, action.payload]));
            return state = [...state, action.payload];

        case 'REMOVE_PRODUCT':
            let newState = [...state].filter((id) => id !==  action.payload)
            localStorage.removeItem("cart", JSON.stringify(newState));
            return state = newState;

        case 'GET_PRODUCTS':
            return state = action.payload;    
            
        default:
            return state;
    }
}

export default cartReducer;