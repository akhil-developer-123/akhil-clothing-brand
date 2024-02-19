import productsData from "./shop-data.json";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { useEffect } from 'react';

const Shop = () => {

    const { products, setProducts } = useContext(ProductsContext);
    useEffect(() => {
        setProducts(productsData);
    }, []);

    return (
        <div className="products-container">
            {
                products.map((product) => {
                    return <ProductCard key={product.id} product={product}/>;
                })
            }
        </div>
    );
}

export default Shop;