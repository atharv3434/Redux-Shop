// Importing necessary libraries and components
import React from 'react'; // React for creating the component
import { FaMinus, FaPlus } from 'react-icons/fa'; // Icons for the minus and plus buttons
import { useDispatch } from 'react-redux'; // Hook to interact with the Redux store
import { addToCart, removeFromCart } from '../state/actions'; // Actions to add/remove items from the cart

/**
 * CardItemCard Component
 * Displays a single item in the cart, showing its image, title, price, quantity, and buttons to update the quantity.
 */
const CardItemCard = ({ id, title, price, image, quantity }) => {
  // The cartItem represents the item currently in the cart with its quantity
  const cartItem = { id, title, price, image, quantity };
  // The product object represents the product itself (without quantity) for adding/removing from cart
  const product = { id, title, price, image };
  
  // Dispatch function to dispatch actions
  const dispatch = useDispatch();

  /**
   * Formats the title to display a maximum of 14 characters, appending '...' if the title is longer.
   * @param {string} title - The title of the product
   * @returns {string} - The formatted title
   */
  const formatTitle = (title) => {
    return title.length <= 14 ? title : title.substr(0, 14) + '...';
  };

  /**
   * Calculates the total price of this cart item (price * quantity).
   * @returns {string} - The formatted price for this item
   */
  const sumPrice = () => {
    return (cartItem.price * cartItem.quantity).toFixed(2);
  };

  return (
    <div className="flex">
      {/* Product image */}
      <div className="w-1/5 h-[6rem] m-auto">
        <img className="h-full w-auto" src={image} alt="" />
      </div>

      {/* Product details and quantity controls */}
      <div className="flex flex-col items-center justify-between w-full text-lg gap-2">
        {/* Product title, formatted */}
        <div className="overflow-hidden font-bold h-8">
          {formatTitle(title)}
        </div>

        {/* Display the total price of the item (price * quantity) */}
        <div>${sumPrice()}</div>

        {/* Controls for changing the quantity of the product */}
        <div className="flex items-center gap-4">
          {/* Button to decrease the quantity (dispatches removeFromCart action) */}
          <button
            className="flex items-center justify-center p-2 font-bold w-full bg-gray-200 text-black hover:bg-black hover:text-white"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <FaMinus /> {/* Minus icon */}
          </button>

          {/* Display the current quantity of the product */}
          <div>{cartItem.quantity}</div>

          {/* Button to increase the quantity (dispatches addToCart action) */}
          <button
            className="flex items-center justify-center p-2 font-bold w-full bg-gray-200 text-black hover:bg-black hover:text-white"
            onClick={() => dispatch(addToCart(product))}
          >
            <FaPlus /> {/* Plus icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the CardItemCard component as the default export
export default CardItemCard;