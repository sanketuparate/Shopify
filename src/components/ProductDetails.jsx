import React from "react";
import { useParams } from "react-router-dom";
import Men from "../data/Men-Product-Details.json";
import Women from "../data/Women-Product-Details.json";
import Electronics from "../data/Electronics-Product-Details.json";

const ProductDetails = () => {
  const { category, id } = useParams();

  let product = null;
  let categoryProducts = [];

  switch (category) {
    case "men":
      categoryProducts = Men;
      break;
    case "women":
      categoryProducts = Women;
      break;
    case "electronics":
      categoryProducts = Electronics;
      break;
    default:
      // Handle invalid category route
      break;
  }

  // Find the product with matching id
  if (categoryProducts.products.length > 0) {
    product = categoryProducts.products.find(
      (product) => product.id === parseInt(id)
    );
  }
  console.log(categoryProducts);

  // Handle if product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <div className="product-info">
        <img src={product.image} alt={product.name} />
        <div className="details">
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Add more product details as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
