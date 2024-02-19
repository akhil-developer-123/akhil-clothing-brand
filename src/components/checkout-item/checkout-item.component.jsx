
import Button from "../button/Button.component";
import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem, incrementQuantity, decrementQuantity, removeItem}) => {
    const {id, name, quantity, imageUrl, price} = cartItem;

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img  src={imageUrl} alt={name}/>
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <span className="arrow" onClick={() => decrementQuantity(cartItem)}>
                    <b>&lt;</b>
                </span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => incrementQuantity(cartItem)}>
                    <b>&gt;</b>
                </span>
            </div>
            <span className="price">${price * quantity}</span>
            <div className="remove-button">
                <span onClick={() => removeItem(cartItem)}>X</span>
            </div>
        </div>
    );
}


export default CheckoutItem;