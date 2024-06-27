import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryDropdown = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="category-dropdown"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="category-name">{category.name}</div>
      {isHovered && category.subcategories && (
        <div className="subcategory-list">
          {category.subcategories.map((sub, index) => {
            console.log(sub);
            return (
              <div key={index} className="subcategory">
                <div className="subcategory-name">
                  <Link to={`/${sub.path}`}>{sub.name || sub}</Link>
                </div>
                {sub.subcategories && (
                  <div className="nested-subcategory-list">
                    {sub.subcategories.map((nestedSub, nestedIndex) => {
                      return (
                        <div key={nestedIndex} className="nested-subcategory">
                          {nestedSub}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
