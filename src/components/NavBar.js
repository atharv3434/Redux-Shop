// Importing React and other necessary libraries
import React from 'react'; // Core React library
import { FaShoppingCart } from 'react-icons/fa'; // Shopping cart icon from the react-icons library
import { useDispatch, useSelector } from 'react-redux'; // React-Redux hooks for accessing state and dispatching actions
import { openCart } from '../state/actions'; // Action to open the cart

// Functional component for the navigation bar
const NavBar = () => {
  // Accessing the Redux state for the cart
  const cart = useSelector((state) => state.cart); // Selects the `cart` slice of state from Redux

  // Getting the `dispatch` function to dispatch actions
  const dispatch = useDispatch();

  // Function to calculate the total quantity of items in the cart
  const sumQuantity = () => {
    return cart.reduce(
      (quantity, cartItem) => quantity + cartItem.quantity, // Add up the `quantity` of each cart item
      0 // Initial value for the accumulator
    );
  };

  // Returning the JSX for the navigation bar
  return (
    <header className="bg-black px-4">
      {/* Main container for the navigation bar */}
      <div className="flex flex-col items-center justify-between w-full max-w-[140rem] my-0 mx-auto p-4 md:flex-row">
        
        {/* Logo section */}
        <h1 className="font-bold text-2xl text-[#46ffd3] min-w-min">
          Redux-Shop
        </h1>

        {/* Navigation section */}
        <nav className="flex items-center w-full justify-end text-lg">
          {/* Cart button with an icon */}
          <div
            className="relative cursor-pointer hover:scale-110 active:scale-105"
            onClick={() => dispatch(openCart())} // Dispatch the action to open the cart
          >
            <button className="rounded-full flex items-center justify-center p-2 font-bold bg-white">
              <FaShoppingCart /> {/* Shopping cart icon */}
            </button>

            {/* Displaying the total quantity of items in the cart */}
            {sumQuantity() > 0 ? (
              <div className="absolute top-5 right-5 flex items-center justify-center w-6 h-6 rounded-full font-bold text-lg bg-red-400">
                {sumQuantity()} {/* Quantity badge */}
              </div>
            ) : (
              '' // If no items are in the cart, display nothing
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

// Exporting the NavBar component as the default export
export default NavBar;