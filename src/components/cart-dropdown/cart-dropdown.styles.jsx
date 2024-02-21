import styled from "styled-components";

export const CartDropdownContainerStyled = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;

export const CartItemsStyled = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const ButtonStyled = styled.button`
    margin-top: auto;
`;