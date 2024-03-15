import { CART_ACTION_TYPES } from "./cart.types";

export const INITIAL_CART_STATE = { 
    isCartOpen: false,
    cartSize: 0,
    totalPrice: 0,
    cartItems: []
}

export const CartReducer = (state=INITIAL_CART_STATE, action) => {
    const { type, payload } = action;

    switch(type){
        case CART_ACTION_TYPES.setIsCartOpen:
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_ACTION_TYPES.setCartSize:
            return {
                ...state,
                cartSize: payload
            }
        case CART_ACTION_TYPES.setTotalPrice:
            return {
                ...state,
                totalPrice: payload 
            }
        case CART_ACTION_TYPES.setCartItems:
            return {
                ...state,
                cartItems: payload
            }
        default: return state;
    }
}