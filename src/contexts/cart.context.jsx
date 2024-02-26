import { createContext, useReducer } from "react"; 
import { INITIAL_STATE } from "./user.context";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: {},
    setCartItems: () => {},
    cartSize: 0,
    setCartSize: () => {},
    totalPrice: 0,
    setTotalPrice: () => {}
});


export const INITIAL_CART_STATE = {
    isCartOpen: false,
    cartSize: 0,
    totalPrice: 0,
    cartItems: []
}

export const CartProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(CartReducer, INITIAL_CART_STATE);

    const { isCartOpen, cartSize, totalPrice, cartItems } = state;
    const setIsCartOpen = (value) => {
        dispatch({type: CART_ACTION_TYPES.setIsCartOpen, payload: { isCartOpen: value }})
    }

    const setCartSize = (size) => {
        dispatch({type: CART_ACTION_TYPES.setCartSize, payload: { cartSize: size }})
    }

    const setTotalPrice = (total) => {
        dispatch({type: CART_ACTION_TYPES.setTotalPrice, payload: { totalPrice: total }})
    }

    const setCartItems = (cartItemsList) => {
        dispatch({type: CART_ACTION_TYPES.setCartItems, payload: { cartItems: cartItemsList }})
    }

    const value = { isCartOpen, setIsCartOpen, 
                    cartItems, setCartItems, 
                    cartSize, setCartSize,
                    totalPrice, setTotalPrice 
                  };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

const CART_ACTION_TYPES = {
    setIsCartOpen: 'SET_IS_CART_OPEN',
    setCartSize: 'SET_CART_SIZE',
    setTotalPrice: 'SET_TOTAL_PRICE',
    setCartItems: 'SET_CART_ITEMS'
}

const CartReducer = (state, action) => {
    const { type, payload } = action;
    const { isCartOpen, cartSize, totalPrice, cartItems } = payload;

    switch(type){
        case CART_ACTION_TYPES.setIsCartOpen:
            return {
                ...state,
                isCartOpen: isCartOpen
            }
        case CART_ACTION_TYPES.setCartSize:
            return {
                ...state,
                cartSize: cartSize
            }
        case CART_ACTION_TYPES.setTotalPrice:
            return {
                ...state,
                totalPrice: totalPrice 
            }
        case CART_ACTION_TYPES.setCartItems:
            return {
                ...state,
                cartItems: cartItems
            }
        default:
            throw new Error(`unhandled action type ${type}`);
    }
}