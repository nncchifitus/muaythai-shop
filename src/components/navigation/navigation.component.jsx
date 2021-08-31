import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
// import ShopDropDown from "../shop-dropdown/shop-dropdown.component";

import "./navigation.styles.scss";

const Navigation = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Navigation;
