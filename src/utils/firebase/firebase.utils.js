import { initializeApp  } from "firebase/app";
import { getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpid0RWQ6seofn-0RqoJ8P1728vTB7Clw",
  authDomain: "akhil-clothing-brand-db.firebaseapp.com",
  projectId: "akhil-clothing-brand-db",
  storageBucket: "akhil-clothing-brand-db.appspot.com",
  messagingSenderId: "374461961975",
  appId: "1:374461961975:web:27151801f273bbea08e5f2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// We are going to use GoogleAuthProvider to let user login
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);


export const db = getFirestore();

// consume user data from authentication response and store it in db 
// keep it async because this DB call can be async
export const createUserDocumentFromAuth = async (userFromAuth) => {
    const collection =  "users";
    const uniqueIdOfDoc =  userFromAuth.uid;
    console.log(uniqueIdOfDoc);
    // if the collection or doc with this uid does not exist Firebase generates it
    // and sends the reference of it.
    const userDocRef = doc(db, collection, uniqueIdOfDoc);
    console.log(userDocRef);
    // gets the data from the doc
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    // this method tells us if there is data in this document
    
    if (!userSnapshot.exists()) {
        const { displayName, email } = userFromAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
            const userSnapshot = await getDoc(userDocRef);
            console.log(userSnapshot);
            console.log(userSnapshot.exists());
        } catch (error) {
            console.log("Error storing user data", error.message);
        }
    }
}

// Create AuthUser if user is signing up with email + password
export const createAuthUserFromEmailAndPassword = async ({ email, password }) => {
    try {
        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
        return userAuth.user;
    } catch(error) {
        if(error.code == "auth/email-already-in-use") {
            alert("user email already in use");
            return;
        } else {
            console.log("error creating user", error.message);
        }
    }
} 

export const logAuthUserWithEmailAndPassword = async (email, password) => {
    try {
        const userAuthResponse = await signInWithEmailAndPassword(auth, email, password);
        return userAuthResponse.user;
    } catch (error) {
        console.log("cannot authenticate user", error.message);
    }
}


export const logGoogleUser = async () => {
    try {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response.user);
    } catch (error) {
        alert("cannot authenticate using google", error.message);
    }
}