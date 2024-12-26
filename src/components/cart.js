// Importing necessary libraries and components
import React from 'react'; // React for creating the component
import { useSelector, useDispatch } from 'react-redux'; // Hooks to interact with Redux store
import CardItemCard from './CartItemCard'; // Component to display individual cart items
import { closeCart } from '../state/actions'; // Action to close the cart

/**
 * Cart Component
 * Displays the shopping cart with a list of items, total price, and options to checkout or close the cart
 */
const Cart = () => {
  // Get cart items from Redux store
  const cart = useSelector((state) => state.cart);

  // Get whether the cart is open from Redux store
  const isCartOpen = useSelector((state) => state.isCartOpen);

  // Dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Calculate the total price of the cart
  const sumTotal = () => {
    return cart
      .reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity, // Calculate total by multiplying price by quantity
        0 // Start with 0
      )
      .toFixed(2); // Fix to 2 decimal places for currency format
  };

  // Map through cart items and create a CardItemCard component for each item
  const cartItems = cart.map((cartItem) => (
    <CardItemCard
      key={Math.random()} // Unique key for each item in the list
      id={cartItem.id} // Pass product ID
      title={cartItem.title} // Pass product title
      price={cartItem.price} // Pass product price
      image={cartItem.image} // Pass product image
      quantity={cartItem.quantity} // Pass product quantity
    ></CardItemCard>
  ));

  // If cart is open, render the cart overlay
  if (isCartOpen) {
    return (
      <>
        {/* Cart overlay */}
        <div
          className="fixed z-50 top-0 right-0 flex flex-col items-center gap-8 w-full h-full p-6 bg-white text-xl md:w-[30rem]"
          isOpen={isCartOpen} // Pass the state to manage the open state (not actually used here)
        >
          {/* Title of the cart */}
          <div className="font-bold mb-6 text-xl">
            Your shopping cart
          </div>
          
          {/* List of items in the cart */}
          <div className="flex flex-col gap-8 w-full overflow-auto">
            {cartItems}
          </div>

          {/* Total price of items in the cart */}
          <div className="font-bold">Total: ${sumTotal()}</div>

          {/* Checkout button */}
          <button className="flex items-center justify-center p-4 font-bold w-3/4 bg-[#46FFD3] hover:bg-[#35eec2]">
            Checkout
          </button>

          {/* Close cart button */}
          <button
            className="flex items-center justify-center p-4 font-bold w-3/4 bg-red-500 hover:bg-red-300"
            onClick={() => dispatch(closeCart())} // Dispatch action to close the cart
          >
            Close
          </button>
        </div>

        {/* Overlay background that darkens the rest of the screen */}
        <div
          className="fixed top-0 w-full h-full opacity-60 bg-black"
          onClick={() => dispatch(closeCart())} // Close cart when clicked outside
        />
      </>
    );
  }

  // Return empty if the cart is not open
  return <></>;
};

// Export the Cart component as the default export
export default Cart;