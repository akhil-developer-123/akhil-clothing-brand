import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from 'react';
import { CheckoutContainerStyled, 
         CheckoutHeaderStyled,
         HeaderBlockStyled,
         TotalStyled
        } from "./checkout.styles";

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
        <CheckoutContainerStyled>
            <CheckoutHeaderStyled>
                <HeaderBlockStyled>
                    <span>Product</span>
                </HeaderBlockStyled>
                <HeaderBlockStyled>
                    <span>Description</span>
                </HeaderBlockStyled>
                <HeaderBlockStyled>
                    <span>Quantity</span>
                </HeaderBlockStyled>
                <HeaderBlockStyled>
                    <span>Price</span>
                </HeaderBlockStyled>
                <HeaderBlockStyled>
                    <span>Remove</span>
                </HeaderBlockStyled>
            </CheckoutHeaderStyled>
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
            <TotalStyled>
                Total Price: ${totalPrice}
            </TotalStyled>
        </CheckoutContainerStyled>
    );
}

export default Checkout;