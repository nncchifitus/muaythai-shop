import { accountActionTypes } from "./account.types";

const INITIAL_STATE = {
  hidden: true,
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case accountActionTypes.SHOW_ACCOUNT_DROPDOWN:
      return {
        hidden: false,
      };
    case accountActionTypes.HIDE_ACCOUNT_DROPDOWN:
      return {
        hidden: true,
      };
    default:
      return state;
  }
};

export default accountReducer;
