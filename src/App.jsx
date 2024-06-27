import React from "react";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import CategoryDropdown from "./components/CategoryDropdown";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <FeaturedProducts />
      {/* <CategoryDropdown /> */}
      <ProductCard />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeaturedProducts />
                {/* <CategoryDropdown /> */}
                <ProductCard />
                <Footer />
              </>
            }
          />
          <Route
            path="/products/men"
            element={<ProductList category="men" />}
          />
          <Route
            path="/products/women"
            element={<ProductList category="women" />}
          />
          <Route
            path="/products/electronics"
            element={<ProductList category="electronics" />}
          />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
