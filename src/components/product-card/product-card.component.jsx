import Button, { BUTTON_TYPES } from "../button/Button.component";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ProductCardContainer, 
         ImgStyled, 
         FooterStyled, 
         NameStyled, 
         PriceStyled } 
        from "./product-card.styles";

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