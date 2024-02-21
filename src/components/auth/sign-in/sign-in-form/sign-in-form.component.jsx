import { useState, useContext } from "react"; 
import { logAuthUserWithEmailAndPassword, 
        createUserDocumentFromAuth, 
        logGoogleUser 
        } from "../../../../utils/firebase/firebase.utils";
import '../../sign-up/sign-up-form/sign-up-form.styles.scss';
import Button from "../../../button/Button.component";
import { ButtonsContainerStyled } from "../sign-in.styles";

const SignInForm = () => {

    const defaultLoginFormFields = {
        email: '',
        password: ''
    }

    const [ loginFormFields, setLoginFormFields  ] = useState(defaultLoginFormFields); 
    console.log(loginFormFields);

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

    const shrinkLabelClass = (field) => {
        return field.length > 0 ? 'shrink': '';
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="group">
                <label className={`form-input-label ${shrinkLabelClass(loginFormFields.email)}`}>Email</label>
                <input className="form-input" required 
                    name="email"
                    type="email"
                    value={loginFormFields.email}
                    onChange={onChangeHandler} 
                />
            </div>
            <div className="group">
                <label className={`form-input-label ${shrinkLabelClass(loginFormFields.password)}`}>Password</label>
                <input className="form-input" required 
                    name="password"
                    type="password"
                    value={loginFormFields.password}
                    onChange={onChangeHandler}
                />
            </div>
            <ButtonsContainerStyled>
                <Button type="submit" buttonType='inverted'>SIGN IN</Button>
                <Button onClick={logGoogleUser} buttonType='googleSignIn' type='button'>
                    SIGN IN WITH GOOGLE
                </Button>
            </ButtonsContainerStyled>
        </form>
    );
}

export default SignInForm;