import SignUp from "../../components/auth/sign-up/sign-up.component";
import SignIn from "../../components/auth/sign-in/sign-in.component";
import { AuthenticationContainerStyled } from "./authentication.styles";

const Authentication = () => {
    return (
        <AuthenticationContainerStyled>
            <SignIn />
            <SignUp />
        </AuthenticationContainerStyled>
    );
}

export default Authentication;