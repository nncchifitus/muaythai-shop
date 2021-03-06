import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.routeName === collectionUrlParam
    )
  );

export const selectCollectionsTitle = createSelector(
  [selectCollections],
  (collections) => collections.map((collection) => collection.title)
);
