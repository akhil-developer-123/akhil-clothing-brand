import SignUpForm from "./sign-up-form/sign-up-form.component";
import {SignUpContainerStyled, H2Styled} from "./sign-up.styles";

const SignUp = () => {
    return (
        <SignUpContainerStyled>
            <H2Styled>Don't have an account?</H2Styled>
            <span>Sign up with your email and password</span>
            <SignUpForm />
        </SignUpContainerStyled>
    );
}

export default SignUp;