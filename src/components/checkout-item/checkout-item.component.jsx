
import Button from "../button/Button.component";
import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem, incrementQuantity, decrementQuantity}) => {
    const {id, name, quantity, imageUrl, price} = cartItem;

    return (
        <div className="checkout-item-container">
            <h2>{name}</h2>
            <div className="quantity-container">
                <button onClick={() => decrementQuantity(cartItem)}>-</button>
                    <p>{quantity}</p>
                <button onClick={() => incrementQuantity(cartItem)}>+</button>
            </div>
            <p>${price * quantity}</p>
        </div>
    );
}


export default CheckoutItem;