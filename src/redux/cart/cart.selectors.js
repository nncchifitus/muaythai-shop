import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCarItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCarItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
