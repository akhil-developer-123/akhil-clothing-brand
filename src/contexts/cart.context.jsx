import { createContext, useState } from "react"; 

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

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState({});
    const [ cartSize, setCartSize ] = useState(0);
    const [ totalPrice, setTotalPrice ] = useState(0);
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