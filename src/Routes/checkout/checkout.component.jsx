import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from 'react';
import "./checkout.styles.scss";

const Checkout = () => {

    const { cartItems, setCartItems,
            cartSize, setCartSize,
            totalPrice, setTotalPrice } = useContext(CartContext);

    const incrementQuantity = (checkoutItem) => {
        const {id, price} = checkoutItem;
        const cartItem = cartItems[id];
        const newCartItem = {
            ...cartItem, quantity: cartItem.quantity + 1
        };
        const newCartItemList = {...cartItems};
        newCartItemList[id] = newCartItem
        setCartItems(newCartItemList);
        setCartSize(cartSize + 1);
        setTotalPrice(totalPrice + price);
    }

    const decrementQuantity = (checkoutItem) => {
        const {id, price} = checkoutItem;
        const newCartItemList = {...cartItems};
        if (checkoutItem.quantity == 1) {
            delete newCartItemList[id];
        } else {
            const newCartItem = {
                ...checkoutItem, quantity: checkoutItem.quantity - 1
            };
            newCartItemList[id] = newCartItem;
        }
        setCartItems(newCartItemList);
        setCartSize(cartSize - 1);
        setTotalPrice(totalPrice - price);
    }

    const removeItem = (checkoutItem) => {
        const {id, price, quantity} = checkoutItem;
        const newCartItemList = {...cartItems};
        delete newCartItemList[id];
        setCartItems(newCartItemList);
        setCartSize(cartSize - quantity);
        setTotalPrice(totalPrice - price * quantity);
    }

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                Object.values(cartItems).map(cartItem => {
                    return <CheckoutItem 
                        key={cartItem.id} 
                        cartItem={cartItem}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        removeItem={removeItem}
                        />;
                })
            }
            <div className="total">
                Total Price: ${totalPrice}
            </div>
        </div>
    );
}

export default Checkout;