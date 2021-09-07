import React from "react";
import { connect } from "react-redux";

import { ReactComponent as UserList } from "../../assets/user-list.svg";

import UserDropdown from "../user-dropdown/user-dropdown.component";

import "./user-icon.styles.scss";

const UserIcon = () => (
  <div className="user-icon">
    <UserList className="user-list" />
    <UserDropdown />
  </div>
);

const mapStateToProps = (state) => ({
  hiddenAccount: state.account.hidden,
});

export default connect(mapStateToProps)(UserIcon);
