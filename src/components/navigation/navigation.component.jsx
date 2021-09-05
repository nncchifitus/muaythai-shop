import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./navigation.styles.scss";

const Navigation = ({ currentUser, hiddenCart, hiddenAccount }) => (
  <div className="navigation">
    <Link className="logo-container" to="/">
      <div
        className="logo"
        style={{
          backgroundImage: `url(${require("../../assets/logo.png").default})`,
        }}
      />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        HOME
      </Link>
      <Link className="option" to="/shop">
        SHOP <i className="fa far fa-angle-down"></i>
      </Link>
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
    {hiddenCart ? null : <CartDropdown />}
  </div>
);

// state là rootReducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenCart: selectCartHidden,
});

export default connect(mapStateToProps)(Navigation);
