import { useParams } from "react-router-dom";
import ProductCard  from "../../components/product-card/product-card.component";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Title } from "./category.styles"; 
import { ProductsContainer } from "../shop/shop.styles";

const Category = () => {
    
    const { categories } = useContext(CategoriesContext);
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
            <ProductsContainer>
                {
                    products && products.map((product) => {
                        return <ProductCard key={product.id} product={product}/>;
                    })
                }
            </ProductsContainer>
        </Fragment>
    );
}

export default Category;