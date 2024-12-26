// Import React and Redux hooks
import React from 'react';
import { useSelector } from 'react-redux'; // Hook to extract data from Redux store

// Component to check if the cart is open
export const IsCartOpenComponent = () => {
  const isCartOpen = useSelector((state) => state.isCartOpen); // Selects `isCartOpen` from the Redux store

  return <div>{isCartOpen ? 'Cart is Open' : 'Cart is Closed'}</div>; // Conditionally renders based on state
};

// Explanation:
// - `useSelector`: Extracts the `isCartOpen` state from the Redux store.
// - The component renders "Cart is Open" if `isCartOpen` is `true`, otherwise "Cart is Closed".