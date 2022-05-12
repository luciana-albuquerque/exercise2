import { applyMiddleware, createStore } from 'redux'
import allReducers from './reducers'
import thunk from 'redux-thunk'

let preloadedState;
const persistedCart = localStorage.getItem('cart')

if (persistedCart) {
  preloadedState = JSON.parse(persistedCart)
}

const store = createStore(allReducers, applyMiddleware(thunk))

export default store