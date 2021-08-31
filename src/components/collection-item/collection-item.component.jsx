import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styes.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <div className="name">{name}</div>
      <div className="price">${price}</div>
    </div>
    <CustomButton>ADD TO CART</CustomButton>
  </div>
);

export default CollectionItem;
