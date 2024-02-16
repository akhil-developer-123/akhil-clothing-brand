import SignInForm from "./sign-in-form/sign-in-form.component";
import { signInWithGooglePopup,
        createUserDocumentFromAuth }
         from "../../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";
import Button from "../../button/Button.component";


const SignIn = () => {
    return (
        <div class="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Login using email and password</span>
            <SignInForm />
        </div>
    );
}

export default SignIn;