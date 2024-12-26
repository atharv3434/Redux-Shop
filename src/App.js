// Importing required components
import Products from './components/Product'; // Component to display the list of products
import NavBar from './components/NavBar';     // Component for the navigation bar
import Cart from './components/cart';         // Component to display the shopping cart

// Functional component for the main application
function App() {
  return (
    // Outer container with a light gray background
    <div className="bg-gray-100">
      
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Container for the products section */}
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Products />
      </div>

      {/* Shopping Cart */}
      <Cart />
    </div>
  );
}

// Exporting the App component as the default export
export default App;