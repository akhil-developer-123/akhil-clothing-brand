// import '../category-list/category-list.styles.scss';
import { useNavigate } from 'react-router-dom';
import { CategoryStyled, BackgroundImageStyled, DetailsStyled, TitleStyled, ShopStyled } from "../category/category.styles";

const Category = ({category}) => {
    const { title, imageUrl} = category;

    const navigate = useNavigate();
    const navigateToShopCategory = () => {
        navigate(`/shop/${title.toLowerCase()}`);
    }

    return (
        <CategoryStyled>
            <BackgroundImageStyled style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            }/>
            <DetailsStyled onClick={navigateToShopCategory}>
                <TitleStyled>{title}</TitleStyled>
                <ShopStyled>Shop</ShopStyled>
            </DetailsStyled>
        </CategoryStyled>
    );
}

export default Category;