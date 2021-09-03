import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import accountReducer from "./account/account.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  account: accountReducer,
  cart: cartReducer,
});
