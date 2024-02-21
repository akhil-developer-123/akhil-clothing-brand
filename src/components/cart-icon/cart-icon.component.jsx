import { CartContext } from '../../contexts/cart.context';
import { useContext  } from 'react';
import {CartIconContainerStyled, ShoppingIconStyled, ItemCountStyled } from "./cart-icon.styles";

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartItems, cartSize } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CartIconContainerStyled onClick={toggleIsCartOpen}>
            <ShoppingIconStyled/>
            <ItemCountStyled>{cartSize}</ItemCountStyled>
        </CartIconContainerStyled>
    ); 
};

export default CartIcon;