import styled from "styled-components";
import { ReactComponent as CartSvg } from '../../assets/shopping-bag.svg';

export const CartIconContainerStyled = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIconStyled = styled(CartSvg)`
    width: 24px;
    height: 24px;
`;

export const ItemCountStyled = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;