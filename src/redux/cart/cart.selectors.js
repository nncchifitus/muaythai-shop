import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCarItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCarItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartItemsTotal = createSelector([selectCarItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
