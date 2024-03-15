import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCart],
    (cart) => cart.isCartOpen
);

// createSelector works based on memoization, 
// if selectCartItems changes then only the the output of this fn changes.
export const selectCartSize = createSelector(
    [selectCartItems],
    (cartItemsMap) => {
        return Object.values(cartItemsMap).reduce(
        (total, item) => total + item.quantity, 0
    )}
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (cartItemsMap) => {
    return Object.values(cartItemsMap).reduce(
        (total, item) => total + item.quantity * item.price, 0
    )}
);