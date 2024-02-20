import ProductCard from "../product-card/product-card.component";


const CategoryPreview = ({category}) => {
    return (
            <div className="products-container">
                {
                    category.items.slice(0,4).map((product) => {
                        return <ProductCard key={product.id} product={product}/>;
                    })
                }
            </div>
    );
}

export default CategoryPreview;