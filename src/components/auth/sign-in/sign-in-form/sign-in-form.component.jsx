import { useState, useContext } from "react"; 
import { logAuthUserWithEmailAndPassword, 
        createUserDocumentFromAuth, 
        logGoogleUser 
        } from "../../../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPES } from "../../../button/Button.component";
import { ButtonsContainerStyled } from "../sign-in.styles";
import { FormInputLabelStyled, 
         FormInputStyled, 
         GroupStyled 
        } from "../../sign-up/sign-up-form/sign-up-form.styles";


const SignInForm = () => {

    const defaultLoginFormFields = {
        email: '',
        password: ''
    }

    const [ loginFormFields, setLoginFormFields  ] = useState(defaultLoginFormFields); 
    const {email, password} = loginFormFields;

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        const newLoginFormFields = {...loginFormFields};
        newLoginFormFields[name] = value;
        setLoginFormFields(newLoginFormFields);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const { email, password } = loginFormFields;
        try {
            const authenticatedUser = await logAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(authenticatedUser);
            console.log("user logged in successfully!");
        } catch (error) {
            console.log("cannot authenticate user", error);
        }
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <GroupStyled>
                <FormInputLabelStyled shrink={email.length}>Email</FormInputLabelStyled>
                <FormInputStyled required 
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChangeHandler} 
                />
            </GroupStyled>
            <GroupStyled>
                <FormInputLabelStyled shrink={password.length}>Password</FormInputLabelStyled>
                <FormInputStyled required 
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChangeHandler}
                />
            </GroupStyled>
            <ButtonsContainerStyled>
                <Button type="submit" buttonType={BUTTON_TYPES.inverted}>SIGN IN</Button>
                <Button onClick={logGoogleUser} buttonType={BUTTON_TYPES.googleSignIn} type='button'>
                    SIGN IN WITH GOOGLE
                </Button>
            </ButtonsContainerStyled>
        </form>
    );
}

export default SignInForm;