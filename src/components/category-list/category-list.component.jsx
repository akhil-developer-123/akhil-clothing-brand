import Category from "../category/category.component";
import { CategoryListStyled } from "./category-list.styles";

const CategoryList = ({categories}) => {
    return (
        <CategoryListStyled>
            {
                categories.map((category) => {
                    return <Category key={category.id} category={category}/>    
                })
            }
        </CategoryListStyled>
    );
}

export default CategoryList;