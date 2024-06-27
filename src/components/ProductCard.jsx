import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  if (!product) {
    return null; // Return null if product is undefined
  }

  const {
    imageUrl,
    brand,
    title,
    color,
    discountedPrice,
    price,
    discountPersent,
    size,
    quantity,
    description,
  } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-brand">{brand}</p>
        <p className="product-color">Color: {color}</p>
        <p className="product-description">{description}</p>
        <div className="product-pricing">
          <span className="product-discounted-price">₹{discountedPrice}</span>
          <span className="product-price">₹{price}</span>
          <span className="product-discount">({discountPersent}% off)</span>
        </div>
        <div className="product-sizes">
          <p>Available Sizes:</p>
          <ul>
            {size.map((s, index) => (
              <li key={index}>
                {s.name} ({s.quantity} available)
              </li>
            ))}
          </ul>
        </div>
        <p className="product-quantity">Total quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default ProductCard;
