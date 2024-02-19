import { createContext, useState, useEffect } from "react"; 
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth, signOutUser } from "../utils/firebase/firebase.utils";

// actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


// UserProvider is a wrapper for the parent component to provide access to the context
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    const handleAuth = async (user) => {
        if (user) {
            await createUserDocumentFromAuth(user);
        }
        setCurrentUser(user); 
    }

    // This runs only once on mounting the component
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(handleAuth);

        // sign out the user on initial mounting of application
        // this is because the auth data in firebase is persisted even after refreshing.
        signOutUser();
        // unsubsribe whenever the component unmounts
        // i.e stop listening to Auth object
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}