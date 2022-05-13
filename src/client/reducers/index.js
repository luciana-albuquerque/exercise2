import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

const allReducers = combineReducers({
    cartReducer,
    productsReducer
})

export default allReducers;