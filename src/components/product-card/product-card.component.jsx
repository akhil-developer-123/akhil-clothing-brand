import Button, { BUTTON_TYPES } from "../button/Button.component";

import { ProductCardContainer,  
         FooterStyled, 
         NameStyled, 
         PriceStyled } 
        from "./product-card.styles";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setCartItems } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

 
const ProductCard = ({product}) => {
    const {id, name, price, imageUrl } = product;
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => {
        const defaultCartItem = {
            ...product,  quantity: 0  
        };
        const cartItem = cartItems[id] ? cartItems[id]: defaultCartItem;
        const newCartItem = {
            ...cartItem, quantity: cartItem.quantity + 1
        };
        const newCartItemList = {...cartItems};
        newCartItemList[id] = newCartItem;
        
        const setCartItemsActionObject = setCartItems(newCartItemList);
        dispatch(setCartItemsActionObject);
    }
    
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <FooterStyled>
                <NameStyled>{name}</NameStyled>
                <PriceStyled>{price}</PriceStyled>
            </FooterStyled>
            <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>ADD TO CART</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;