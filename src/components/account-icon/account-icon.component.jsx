import React from "react";
import { connect } from "react-redux";

import { ReactComponent as UserList } from "../../assets/user-list.svg";

import {
  showAccountDropdown,
  hideAccountDropdown,
} from "../../redux/account/account.actions";

import AccountDropdown from "../account-dropdown/account-dropdown.component";

import "./account-icon.styles.scss";

const AccountIcon = ({ showAccountDropdown, hideAccountDropdown, hiddenAccount }) => (
  <div
    className="account-icon"
    onMouseEnter={showAccountDropdown}
    onMouseOut={hideAccountDropdown}
  >
    <UserList className="user-list" />
    {/* <AccountDropdown /> */}
    {hiddenAccount ? null : <AccountDropdown />}
  </div>
);

const mapStateToProps = (state) => ({
  hiddenAccount: state.account.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  showAccountDropdown: () => dispatch(showAccountDropdown()),
  hideAccountDropdown: () => dispatch(hideAccountDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountIcon);
