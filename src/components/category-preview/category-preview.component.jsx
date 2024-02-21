import ProductCard from "../product-card/product-card.component";
import { ProductsContainer } from "../../Routes/shop/shop.styles";

const CategoryPreview = ({category}) => {
    return (
            <ProductsContainer>
                {
                    category.items.slice(0,4).map((product) => {
                        return <ProductCard key={product.id} product={product}/>;
                    })
                }
            </ProductsContainer>
    );
}

export default CategoryPreview;