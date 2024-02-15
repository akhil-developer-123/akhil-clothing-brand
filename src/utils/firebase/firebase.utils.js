import { initializeApp  } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
const authProvider = new GoogleAuthProvider();
authProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, authProvider);


export const db = getFirestore();

// consume user data from authentication response and store it in db 
// keep it async because this DB call can be async
export const createUserDocumentFromAuth = async (userFromAuth) => {
    const collection =  "users";
    const uniqueIdOfDoc =  userFromAuth.uid;

    // if the collection or doc with this uid does not exist Firebase generates it
    // and sends the reference of it.
    const userDocRef = doc(db, collection, uniqueIdOfDoc);

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