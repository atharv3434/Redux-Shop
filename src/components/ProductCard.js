// Importing necessary libraries
import React from 'react'; // React library for building the component
import { useDispatch } from 'react-redux'; // Hook to dispatch Redux actions
import { addToCart } from '../state/actions/cart'; // Action to add a product to the cart

/**
 * ProductCard Component
 * @param {Object} props - Properties passed to the component
 * @param {number} props.id - Product ID
 * @param {string} props.title - Product title
 * @param {number} props.price - Product price
 * @param {string} props.image - Product image URL
 * @param {string} props.category - Product category (optional, not used here directly)
 */
const ProductCard = ({ id, title, price, image, category }) => {
  // Create a product object to be added to the cart
  const product = { id, title, price, image, category };

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // JSX structure for the product card
  return (
    <div className="flex flex-col rounded-lg text-xl bg-white border border-slate-800">
      {/* Product Image Section */}
      <div className="h-72 p-12 my-0 mx-auto">
        <img className="h-full" src={image} alt={title} />
      </div>

      {/* Product Information Section */}
      <div className="flex flex-col justify-between gap-4 p-4 h-full border-t border-t-slate-800">
        {/* Title and Price */}
        <div className="flex flex-col justify-between h-full gap-4">
          <div className="font-bold">{title}</div>
          <div>${price.toFixed(2)}</div> {/* Price formatted to 2 decimal places */}
        </div>

        {/* Add to Cart Button */}
        <button
          className="flex items-center justify-center p-2 font-bold w-full bg-black text-white hover:bg-slate-800"
          onClick={() => dispatch(addToCart(product))} // Dispatch action to add product to cart
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

// Exporting the ProductCard component as the default export
export default ProductCard;
