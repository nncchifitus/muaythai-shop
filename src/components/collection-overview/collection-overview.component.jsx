import React from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import SHOP_DATA from "./shop.data";

import "./collection-overview.styles.scss";

class CollectionOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        {collections
          .map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
          ))}
      </div>
    );
  }
}

export default CollectionOverview;
