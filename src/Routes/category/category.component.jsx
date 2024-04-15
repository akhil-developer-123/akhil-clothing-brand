import { useParams } from "react-router-dom";
import ProductCard  from "../../components/product-card/product-card.component";
import { Fragment, useEffect, useState } from "react";
import { selectCategories } from "../../store/categories/categories.selector";
import { Title } from "./category.styles"; 
import { ProductsContainer } from "../shop/shop.styles";
import { useSelector } from "react-redux";
import Spinner  from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/categories/categories.selector"; 

const Category = () => {
    
    const categories  = useSelector(selectCategories);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const { category } = useParams();

    const findCategoryItems = (title) => {
        const categoryItems =  categories
                        .filter((item)=> item.title.toLowerCase() == category.toLowerCase())
                        .map((item) => item.items);
        return categoryItems.length > 0 ? categoryItems[0]: undefined;
    }

    const defaultProducts = findCategoryItems(category);
    const [products, setProducts] = useState(defaultProducts);
    useEffect(() => {
        setProducts(findCategoryItems(category));
    }, [category, categories]);

    return (
        <Fragment>
            <Title>{category}</Title>
            {
                isLoading ? (<Spinner />) : (
                    <ProductsContainer>
                        {
                            products && products.map((product) => {
                                return <ProductCard key={product.id} product={product}/>;
                            })
                        }
                    </ProductsContainer>
                )
            }
        </Fragment>
    );
}

export default Category;