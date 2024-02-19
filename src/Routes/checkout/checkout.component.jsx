import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from 'react';

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
            {
                Object.values(cartItems).map(cartItem => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        removeItem={removeItem}
                    />
                })
            }
            <div>
                Total Price: ${totalPrice}
            </div>
        </div>
    );
}

export default Checkout;