import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import accountReducer from "./account/account.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  account: accountReducer,
  cart: cartReducer,
  shop: shopReducer,
});

// persistReducer đóng gói rootReducer và whitelist chứa các state cần lưu vào local storage
export default persistReducer(persistConfig, rootReducer);
