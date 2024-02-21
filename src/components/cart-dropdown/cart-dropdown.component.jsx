import  { CartContext }  from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import { CartDropdownContainerStyled, CartItemsStyled, ButtonStyled } from "./cart-dropdown.styles";
import Button from "../button/Button.component";

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <CartDropdownContainerStyled>
            <CartItemsStyled>
                {
                    Object.values(cartItems).map((cartItem) => {
                        return <CartItem key={cartItem.id} cartItem={cartItem}/>
                    })
                }
            </CartItemsStyled>
            <Link to="/checkout" >
                <Button buttonType="inverted">CHECKOUT</Button>
            </Link>
        </CartDropdownContainerStyled>
    );
}

export default CartDropDown;