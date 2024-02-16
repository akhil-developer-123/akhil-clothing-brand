import SignUp from "../../components/auth/sign-up/sign-up.component";
import SignIn from "../../components/auth/sign-in/sign-in.component";
import "./authentication.styles.scss";

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default Authentication;