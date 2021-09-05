import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="product">
        <div className="image-container">
          <img src={imageUrl} alt="item" />
        </div>
        <span className="product-name">{name}</span>
      </div>
      <span className="unit-price">${price}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price * quantity}</span>
      <span className="remove-btn">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
