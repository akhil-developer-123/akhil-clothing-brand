import { createContext, useState } from "react"; 

// actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


// UserProvider is a wrapper for the parent component to provide access to the context
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}