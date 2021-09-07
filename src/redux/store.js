import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import persistReducer from "./root-reducer";

const middleWares = [logger];

// Thêm persistReducer vào store của app
export const store = createStore(
  persistReducer,
  applyMiddleware(...middleWares)
);

// Đóng góp store của app vào persistStore
export const persistor = persistStore(store);

export default { store, persistor };

// Các bước persist:
// 1. đóng gói rootReducer vào persistReducer
// 2. truyền persistReducer vào store của app
// 3. truyền store của app vào persistStore để đảm bảo Redux state sẽ được lưu vào storage mỗi khi nó thay đổi
