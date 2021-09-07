import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";

import "./shop-dropdown.styles.scss";

const ShopDropdown = ({ collections }) => {
  return (
    <div className="shop-dropdown">
      {collections.map((collection) => (
        <Link
          to={`/shop/${collection.routeName}`}
          className="title"
          key={collection.id}
        >
          {collection.title}
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopDropdown);
