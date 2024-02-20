import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocumentsFromFirestore } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categories: [],
    setCategories: () => null
});


export const CategoriesProvider = ({children}) => {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const SHOP_DATA = await getCategoriesAndDocumentsFromFirestore();
            setCategories(SHOP_DATA);
        }
        getCategories();
    }, []);

    const value = { categories, setCategories };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}