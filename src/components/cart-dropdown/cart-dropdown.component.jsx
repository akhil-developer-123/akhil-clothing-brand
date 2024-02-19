import Button from "../button/Button.component";
import "./cart-dropdown.styles.scss";
import  { CartContext }  from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CartDropDown = () => {

    const { cartItems, totalPrice  } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    Object.values(cartItems).map((cartItem) => {
                        return <CartItem key={cartItem.id} cartItem={cartItem}/>
                    })
                }
            </div>
            <Link to="/checkout" >
                <Button buttonType="inverted">CHECKOUT</Button>
            </Link>
        </div>
    );
}

export default CartDropDown;