import { createSelector } from "reselect";

// Chọn state của component từ state gốc
const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
