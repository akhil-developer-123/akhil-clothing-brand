import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainerStyled, 
         CartItemsStyled, 
         EmptyMessage } 
        from "./cart-dropdown.styles";
import Button, { BUTTON_TYPES } from "../button/Button.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropDown = () => {

    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainerStyled>
            <CartItemsStyled>
                {
                    Object.values(cartItems).length ? (
                        Object.values(cartItems).map((cartItem) => {
                            return <CartItem key={cartItem.id} cartItem={cartItem}/>
                        })
                    ) : (
                        <EmptyMessage>Your Cart is Empty</EmptyMessage>
                    )
                }
            </CartItemsStyled>
            <Button onClick={goToCheckout}
            buttonType={BUTTON_TYPES.inverted}>CHECKOUT</Button>
        </CartDropdownContainerStyled>
    );
}

export default CartDropDown;