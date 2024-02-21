// import "./checkout-item.styles.scss";
import  {CheckoutItemContainer,
         ImageContainer,
         ImgStyled,
         NameStyled,
         PriceStyled,
         QuantityStyled,
         ArrowStyled,
         ValueStyled,
         RemoveItemButtonStyled
} from "./checkout-item.styles";
 
const CheckoutItem = ({cartItem, incrementQuantity, decrementQuantity, removeItem}) => {
    const {id, name, quantity, imageUrl, price} = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <ImgStyled  src={imageUrl} alt={name}/>
            </ImageContainer>
            <NameStyled>{name}</NameStyled>
            <QuantityStyled>
                <ArrowStyled onClick={() => decrementQuantity(cartItem)}>
                    <b>&#10094;</b>
                </ArrowStyled>
                <ValueStyled>{quantity}</ValueStyled>
                <ArrowStyled onClick={() => incrementQuantity(cartItem)}>
                    <b>&#10095;</b>
                </ArrowStyled>
            </QuantityStyled>
            <PriceStyled>${price * quantity}</PriceStyled>
            <RemoveItemButtonStyled>
                <span onClick={() => removeItem(cartItem)}>X</span>
            </RemoveItemButtonStyled>
        </CheckoutItemContainer>
    );
}


export default CheckoutItem;