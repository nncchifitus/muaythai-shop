import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button
    className={
      otherProps.className
        ? `custom-button ${otherProps.className}`
        : "custom-button"
    }
  >
    {children}
  </button>
);

export default CustomButton;
