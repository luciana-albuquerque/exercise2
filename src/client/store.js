import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import allReducers from './reducers'
import thunk from 'redux-thunk'

let composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

/* let preloadedState;
const persistedCart = localStorage.getItem('cart')

if (persistedCart) {
  preloadedState = JSON.parse(persistedCart)
}  */

const store = createStore(allReducers, composedEnhancer)

export type AppDispatch = typeof store.dispatch

export default store
