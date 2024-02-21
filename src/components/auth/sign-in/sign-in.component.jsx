import SignInForm from "./sign-in-form/sign-in-form.component";

const SignIn = () => {
    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Login using email and password</span>
            <SignInForm />
        </div>
    );
}

export default SignIn;