import { signInWithGooglePopup,
        createUserDocumentFromAuth }
         from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        createUserDocumentFromAuth(response.user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                SignIn with Google
            </button>
        </div>
        
    );
}

export default SignIn;