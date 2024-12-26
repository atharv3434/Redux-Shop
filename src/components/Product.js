// Importing React and necessary libraries
import React, { useEffect } from 'react'; // React library and `useEffect` hook for side effects
import { useDispatch, useSelector } from 'react-redux'; // React-Redux hooks for accessing state and dispatching actions
import ProductCard from './ProductCard'; // Component for rendering individual product cards
import { setProducts } from '../state/actions/product'; // Action to update products in the Redux store

// Functional component for displaying products
const Products = () => {
  // Access the `products` slice of state from Redux
  const products = useSelector((state) => state.products);

  // Get the `dispatch` function to dispatch Redux actions
  const dispatch = useDispatch();

  // `useEffect` hook to load products when the component mounts
  useEffect(() => {
    loadProducts(); // Call the function to fetch and filter products
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to fetch, filter, and dispatch products to the Redux store
  const loadProducts = async () => {
    dispatch(setProducts(filterProducts(await fetchProducts())));
  };

  // Function to fetch products from the Fake Store API
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products'); // API call to fetch products
    let data = await response.json(); // Parse the JSON response
    return data; // Return the fetched data
  };

  // Function to filter products to include only specific categories
  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.category === `men's clothing` || // Include men's clothing
        product.category === `women's clothing` // Include women's clothing
    );
  };

  // Map the filtered products to ProductCard components
  const productCards = products.map((product) => (
    <ProductCard
      key={Math.random()} // Unique key for each product card (though not ideal for production)
      id={product.id} // Pass product ID as a prop
      title={product.title} // Pass product title as a prop
      price={product.price} // Pass product price as a prop
      image={product.image} // Pass product image URL as a prop
    />
  ));

  // Render the product grid
  return (
    <div className="grid grid-cols-1 gap-16 justify-center mt-16 md:grid-cols-2 lg:grid-cols-3">
      {productCards} {/* Render all ProductCard components */}
    </div>
  );
};

// Exporting the Products component as the default export
export default Products;