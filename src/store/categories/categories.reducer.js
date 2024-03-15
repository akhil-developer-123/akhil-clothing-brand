import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const INITIAL_CATEGORIES_STATE = {
    categories: []
}

export const CategoriesReducer = (state=INITIAL_CATEGORIES_STATE, action={}) => {
    const {type, payload} = action;
    console.log('category dispatched');
    switch(type){
        case CATEGORIES_ACTION_TYPES.setCategories:
            return {
                ...state,
                categories: payload
            }
        default: 
            return state;
    }
}