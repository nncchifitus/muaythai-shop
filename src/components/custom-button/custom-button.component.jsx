import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isCancelBtn,
  isNormalBtn,
  isInverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      isCancelBtn ? "cancel-btn" : ""
    } ${isNormalBtn ? "normal-btn" : ""} ${
      isInverted ? "inverted-btn" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
