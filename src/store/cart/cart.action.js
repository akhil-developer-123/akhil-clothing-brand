import { createAction } from "../utils"
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (isCartOpen) => { 
   return createAction(CART_ACTION_TYPES.setIsCartOpen, isCartOpen );
}

export const setCartSize = (cartSize) => {
    return createAction(CART_ACTION_TYPES.setCartSize, cartSize );
}

export const setTotalPrice = (totalPrice) => {
    return createAction(CART_ACTION_TYPES.setTotalPrice, totalPrice);
}

export const setCartItems = (cartItems) => {
    return createAction(CART_ACTION_TYPES.setCartItems, cartItems);
}