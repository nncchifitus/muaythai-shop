import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import ShopDropdown from "../shop-dropdown/shop-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hiddenCart, hiddenAccount, collections }) => (
  <div className="header">
    <div className="logo-container">LOGO</div>
    <div className="options">
      <Link className="option" to="/">
        HOME
      </Link>
      <Link className="option" to="/shop">
        SHOP <i className="fa far fa-angle-down"></i>
        <Route path="/" component={ShopDropdown} />
      </Link>
    </div>
    <div className="tools">
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/account/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
  </div>
);

// state là rootReducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenCart: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
