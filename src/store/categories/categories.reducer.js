import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const INITIAL_CATEGORIES_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

export const CategoriesReducer = (state=INITIAL_CATEGORIES_STATE, action={}) => {
    const {type, payload} = action;
    console.log('category dispatched');
    switch(type){
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false
            };
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state, 
                isLoading: true
            };
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        default: 
            return state;
    }
}