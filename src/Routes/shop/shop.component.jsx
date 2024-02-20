import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import { useEffect } from 'react';
import { getCategoriesAndDocumentsFromFirestore } from "../../utils/firebase/firebase.utils";

const Shop = () => {

    const { categories } = useContext(CategoriesContext);

    return (
        <div className="products-container">
            {
                categories.map((category) => {
                    return category.items.map((product) => {
                        return <ProductCard key={product.id} product={product}/>;
                    });
                })
            }
        </div>
    );
}

export default Shop;