import { CartItemContainerStyled, 
        ItemDetailsStyled, 
        NameStyled, 
        ImgStyled, 
        PriceStyled } 
        from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <CartItemContainerStyled>
            <ImgStyled src={imageUrl} alt={name}/>
            <ItemDetailsStyled>
                <NameStyled>{name}</NameStyled>
                <PriceStyled>{quantity} X ${price}</PriceStyled>
            </ItemDetailsStyled>
        </CartItemContainerStyled>
    );
}

export default CartItem;