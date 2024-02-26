import { createContext, useEffect, useReducer } from 'react';
import { getCategoriesAndDocumentsFromFirestore } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categories: [],
    setCategories: () => null
});

const INITIAL_CATEGORIES_STATE = {
    categories: []
}

const CATEGORIES_ACTION_TYPES = {
    setCategories: 'SET_CATEGORIES'
}

const CategoriesReducer = (state, action) => {
    const {type, payload} = action;
    console.log('category dispatched');
    const {categories} = payload;
    switch(type){
        case CATEGORIES_ACTION_TYPES.setCategories:
            return {
                ...state,
                categories: categories
            }
        default: 
            throw new Error(`unhandled action type ${type}`);
    }
}



export const CategoriesProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(CategoriesReducer, INITIAL_CATEGORIES_STATE);
    const {categories} = state;
    const setCategories = (categoriesList) => {
        dispatch({type: CATEGORIES_ACTION_TYPES.setCategories, payload: {categories: categoriesList}});
    }

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