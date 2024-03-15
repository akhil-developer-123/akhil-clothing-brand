import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CheckoutContainerStyled, 
         CheckoutHeaderStyled,
         HeaderBlockStyled,
         TotalStyled
        } from "./checkout.styles";
import { selectCartItems, selectCartSize, selectCartTotalPrice } from "../../store/cart/cart.selector";
import { setCartItems } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const cartSize =  useSelector(selectCartSize);
    const totalPrice = useSelector(selectCartTotalPrice);

    const setCartItemsAndDispatch = (newCartItemList) => {
        const setCartItemsActionObject = setCartItems(newCartItemList);
        dispatch(setCartItemsActionObject);
    }

    const incrementQuantity = (checkoutItem) => {
        const {id, price} = checkoutItem;
        const cartItem = cartItems[id];
        const newCartItem = {
            ...cartItem, quantity: cartItem.quantity + 1
        };
        const newCartItemList = {...cartItems};
        newCartItemList[id] = newCartItem
        setCartItemsAndDispatch(newCartItemList);
    }

    const decrementQuantity = (checkoutItem) => {
        const { id } = checkoutItem;
        const newCartItemList = {...cartItems};
        if (checkoutItem.quantity == 1) {
            delete newCartItemList[id];
        } else {
            const newCartItem = {
                ...checkoutItem, quantity: checkoutItem.quantity - 1
            };
            newCartItemList[id] = newCartItem;
        }
        setCartItemsAndDispatch(newCartItemList);
    }

    const removeItem = (checkoutItem) => {
        const {id} = checkoutItem;
        const newCartItemList = {...cartItems};
        delete newCartItemList[id];
        setCartItemsAndDispatch(newCartItemList);
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