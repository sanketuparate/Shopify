import React from "react";
import featuredProductsData from "../data/featured-products.json";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      {featuredProductsData.featuredProducts.map((product, index) => (
        <div key={index} className="featured-product">
          <img
            src={product.image}
            alt={product.title}
            className="featured-product-image"
          />
          <div className="featured-product-details">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <Link
              to={`/products/${product.name}`}
              className="featured-product-button"
            >
              Shop Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
