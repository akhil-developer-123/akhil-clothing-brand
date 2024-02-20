import { useParams } from "react-router-dom";
import ProductCard  from "../../components/product-card/product-card.component";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

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
            <h2 className="title" style={{textAlign:"center"}}>{category.toUpperCase()}</h2>
            <div className="products-container">
                {
                    products && products.map((product) => {
                        return <ProductCard key={product.id} product={product}/>;
                    })
                }
            </div>
        </Fragment>
    );
}

export default Category;