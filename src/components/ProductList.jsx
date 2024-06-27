import React from "react";
import Men from "../data/Men-Products.json";
import Women from "../data/Women-Products.json";
import Electronics from "../data/Electronics.json";
import { Link } from "react-router-dom";
import ProductListCard from "./ProductListCard";

const ProductList = ({ category }) => {
  console.log(category);

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
      break;
  }
  return (
    <div>
      <h1> Product List</h1>
      <ul>
        {categoryProducts?.category.map((product) => (
          <Link
            to={`/products/${category}/${product.id}`}
            className="product-list"
          >
            <ProductListCard key={product.id} product={product} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
