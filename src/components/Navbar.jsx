import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import SearchBar from "./SearchBar";
import FeaturedProducts from "./FeaturedProducts";
import categoriesData from "../data/categories.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h1>Shopping Website</h1>
        <SearchBar />
      </div>

      <div className="categories">
        {categoriesData.categories.map((category, index) => (
          <Link to={`${category.path}`}>
            <CategoryDropdown key={index} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
