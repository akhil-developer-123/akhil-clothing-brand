import styled from "styled-components";

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
`;

export const ImgStyled  = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;

    ${ProductCardContainer}:hover & {
        opacity: 0.8;
    }
`;

export const ButtonStyled = styled.button`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    ${ProductCardContainer}:hover & {
        opacity: 0.85;
        display: flex;
    }
`;

export const FooterStyled = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameStyled = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;


export const PriceStyled = styled.span`
    width: 10%;
`;