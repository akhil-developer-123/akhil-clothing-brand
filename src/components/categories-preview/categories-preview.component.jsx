import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";
import { Link } from "react-router-dom"; 

const CategoriesPreview = () => {
    const { categories } = useContext(CategoriesContext);

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