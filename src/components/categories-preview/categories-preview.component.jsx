import { Fragment } from "react";
import CategoryPreview from "../category-preview/category-preview.component";
import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux"; 
import { selectCategories } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
    
    const categories = useSelector(selectCategories);

    return (
        <Fragment>
            {
                categories.map((category) => { 
                    return (
                        <Fragment key={category.title}>
                            <Link to={`${category.title.toLowerCase()}`}>
                                <h2><span>{category.title}</span></h2>
                            </Link>
                            <CategoryPreview category={category} />
                        </Fragment>
                    );
                })
            }
        </Fragment>
    );
}

export default CategoriesPreview;