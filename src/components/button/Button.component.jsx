import { BaseButtonStyled, 
         GoogleSigninButtonStyled,
         InvertedButtonStyled
        } from "./button.styles";

export const BUTTON_TYPES = {
    base: 'base',
    googleSignIn: 'google-sign-in',
    inverted: 'inverted'
}

export const getButtonStyledComponent = (buttonType = BUTTON_TYPES.base) => {
    const buttonTypeToButtonStyledComponentMap = {
        [BUTTON_TYPES.base]: BaseButtonStyled,
        [BUTTON_TYPES.googleSignIn]: GoogleSigninButtonStyled,
        [BUTTON_TYPES.inverted]: InvertedButtonStyled
    }
    return buttonTypeToButtonStyledComponentMap[buttonType];
}

const Button = ({children, buttonType, ...otherProps}) => {
    const ButtonStyled = getButtonStyledComponent(buttonType);
    return (
        <ButtonStyled  {...otherProps}>
            {children}
        </ButtonStyled>
    );
}

export default Button;