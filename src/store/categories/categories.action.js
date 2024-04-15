import { createAction } from "../utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocumentsFromFirestore } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);


export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// redux thunk function
export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categories_data = await getCategoriesAndDocumentsFromFirestore();
        dispatch(fetchCategoriesSuccess(categories_data));
    } catch(error) {
        dispatch(fetchCategoriesFailed(error));
    }
}