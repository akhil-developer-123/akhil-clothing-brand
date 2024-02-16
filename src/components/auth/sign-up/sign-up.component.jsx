import SignUpForm from "./sign-up-form/sign-up-form.component";
import "./sign-up.styles.scss";

const SignUp = () => {
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <SignUpForm />
        </div>
    );
}

export default SignUp;