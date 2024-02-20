import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products: [],
    setProducts: () => null
});


export const ProductsProvider = ({children}) => {
    const [ products, setProducts ] = useState([]);

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, []);

    const value = { products, setProducts };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}