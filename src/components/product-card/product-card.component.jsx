import Button from "../button/Button.component";
import "./product-card.styles.scss";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {
    const {id, name, price, imageUrl } = product;
    const { cartItems, setCartItems, 
            cartSize, setCartSize,
            totalPrice, setTotalPrice
    } = useContext(CartContext);

    const addProductToCart = () => {
        const defaultCartItem = {
            ...product,  quantity: 0  
        };
        const cartItem = cartItems[id] ? cartItems[id]: defaultCartItem;
        const newCartItem = {
            ...cartItem, quantity: cartItem.quantity + 1
        };
        const newCartItemList = {...cartItems};
        newCartItemList[id] = newCartItem
        setCartItems(newCartItemList);
        setCartSize(cartSize + 1);
        setTotalPrice(totalPrice + price);
    }
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>ADD TO CART</Button>
        </div>
    );
}

export default ProductCard;