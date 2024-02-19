import products from "./shop-data.json";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
    return (
        <div className="products-container">
            {
                products.map((product) => {
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
    );
}

export default Shop;