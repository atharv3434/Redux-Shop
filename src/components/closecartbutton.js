// Import React and Redux hooks
import React from 'react';
import { useDispatch } from 'react-redux'; // Hook to dispatch actions
import { closeCart } from '../../state/actions/isCartOpen'; // Action to close the cart

// Component for a button to close the cart
export const CloseCartButton = () => {
  const dispatch = useDispatch(); // Get the `dispatch` function

  return (
    <div>
      <button onClick={() => dispatch(closeCart())}>Close Cart</button>
    </div>
  );
};