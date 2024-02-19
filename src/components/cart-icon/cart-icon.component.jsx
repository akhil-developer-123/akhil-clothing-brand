import { ReactComponent as CartSvg } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import "./cart-icon.styles.scss";
import { useContext  } from 'react';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartItems, cartSize } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
        console.log("isCartOpen", isCartOpen);
    }

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <CartSvg className='shopping-icon'/>
            <span className='item-count'>{cartSize}</span>
        </div>
    ); 
};


export default CartIcon;