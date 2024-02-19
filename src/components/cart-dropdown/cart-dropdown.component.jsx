import Button from "../button/Button.component";
import "./cart-dropdown.styles.scss";
import  { CartContext }  from "../../contexts/cart.context";
import { useContext } from "react";

const CartDropDown = () => {

    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            <Button buttonType="inverted">CHECKOUT</Button>
        </div>
    );
}

export default CartDropDown;