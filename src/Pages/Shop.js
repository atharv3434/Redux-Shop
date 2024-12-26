// Import React and Redux hooks
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Hooks for accessing store state and dispatching actions
import { addToCart } from '../state/actions/cart'; // Action to add a product to the cart

// Component for the Shop page
export const Shop = () => {
  const products = useSelector((state) => state.products); // Selects the `products` state
  const dispatch = useDispatch(); // Provides access to the `dispatch` function

  return (
    <div>
      <h1>Shop</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(addToCart(product))} // Dispatch `addToCart` action with the product
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Explanation:
// - `useSelector`: Extracts the `products` state from the Redux store.
// - `dispatch(addToCart(product))`: Dispatches the `addToCart` action to add the product to the cart.
// - The component renders a list of products, each with an "Add to Cart" button.
