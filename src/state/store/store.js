// Import required dependencies from Redux
import { createStore, applyMiddleware, compose } from 'redux'; // For creating the Redux store and applying middleware
import { thunk } from 'redux-thunk'; // Middleware to handle async actions
import rootReducer from '../../reducer'; // The root reducer combining all app reducers

// Create the Redux store
export const store = createStore(
  rootReducer, // The combined reducers that manage the global state
  compose(applyMiddleware(thunk)) // Use thunk middleware to handle asynchronous tasks
);

// Explanation:
// - `createStore` sets up the Redux store.
// - `applyMiddleware(thunk)` allows us to perform async operations in action creators, such as API calls.
// - `compose` enhances the store with middleware or DevTools integration.
