import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
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
      <span className="quantity">
        <div
          className="quantity-change-btn"
          onClick={() => removeItem(cartItem)}
        >
          <i className="ti-minus"></i>
        </div>
        <div className="quantity-value">
          <span>{quantity}</span>
        </div>
        <div className="quantity-change-btn" onClick={() => addItem(cartItem)}>
          <i className="ti-plus"></i>
        </div>
      </span>
      <span className="price">${price * quantity}</span>
      <span className="remove-btn" onClick={() => clearItem(cartItem)}>
        <i className="ti-close"></i>
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
