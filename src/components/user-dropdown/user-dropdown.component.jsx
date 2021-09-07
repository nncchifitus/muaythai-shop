import React from "react";

import { auth } from "../../firebase/firebase.utils";

import "./user-dropdown.styles.scss";

const UserDropdown = () => (
  <div className="user-dropdown">
    <div className="option" onClick={() => auth.signOut()}>
      SIGN OUT
    </div>
  </div>
);

export default UserDropdown;
