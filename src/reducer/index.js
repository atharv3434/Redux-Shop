// Import the `combineReducers` function from Redux and individual reducers
import { combineReducers } from 'redux';
import cartReducer from './cart'; // Reducer for cart functionality
import isCartOpenReducer from './isCartOpen'; // Reducer for cart open/close state
import productsReducer from './product'; // Reducer for product data

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  cart: cartReducer, // Manages the `cart` state
  isCartOpen: isCartOpenReducer, // Manages the `isCartOpen` state
  products: productsReducer, // Manages the `products` state
});

export default rootReducer;