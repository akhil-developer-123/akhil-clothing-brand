import Button from "../button/Button.component";
import "./cart-dropdown.styles.scss";
import  { CartContext }  from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = () => {

    const { isCartOpen, setIsCartOpen, cartItems  } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    Object.values(cartItems).map((cartItem) => {
                        return <CartItem key={cartItem.id} cartItem={cartItem}/>
                    })
                }
            </div>
            <Button buttonType="inverted">CHECKOUT</Button>
        </div>
    );
}

export default CartDropDown;