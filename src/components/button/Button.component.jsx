import "./button.styles.scss";

const BUTTON_TYPES = {
    googleSignIn: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;