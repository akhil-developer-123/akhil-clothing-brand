import Button from "../button/Button.component";
import "./product-card.styles.scss";

const ProductCard = ({product}) => {
    const {name, price, imageUrl } = product;
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted">ADD TO CART</Button>
        </div>
    );
}

export default ProductCard;