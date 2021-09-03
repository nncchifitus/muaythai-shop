import { accountActionTypes } from "./account.types";

export const showAccountDropdown = () => ({
  type: accountActionTypes.SHOW_ACCOUNT_DROPDOWN,
});

export const hideAccountDropdown = () => ({
  type: accountActionTypes.HIDE_ACCOUNT_DROPDOWN,
});
