
import {CartIconContainerStyled, ShoppingIconStyled, ItemCountStyled } from "./cart-icon.styles";
import { useDispatch } from 'react-redux';
import { setIsCartOpen, setCartSize }  from "../../store/cart/cart.action";
import { useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartSize } from "../../store/cart/cart.selector";

const CartIcon = () => {

    const dispatch = useDispatch();
     
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartSize = useSelector(selectCartSize);

    const toggleIsCartOpen = () => {
        const actionObject = setIsCartOpen(!isCartOpen);
        dispatch(actionObject);
    }

    return (
        <CartIconContainerStyled onClick={toggleIsCartOpen}>
            <ShoppingIconStyled/>
            <ItemCountStyled>{cartSize}</ItemCountStyled>
        </CartIconContainerStyled>
    ); 
};

export default CartIcon;