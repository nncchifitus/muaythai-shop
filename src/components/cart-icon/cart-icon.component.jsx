import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  selectCartItemsCount,
  selectCartHidden,
} from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount, cartHidden }) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingBag className="shopping-bag" />
    <span className="item-count">{itemCount}</span>
    {cartHidden ? null : <CartDropdown />}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
