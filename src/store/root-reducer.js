import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer"; 
import { CategoriesReducer } from "./categories/categories.reducer";
import { CartReducer } from "./cart/cart.reducer";


// a combination of all reducers
export const rootReducer = combineReducers({
    user: UserReducer,
    categories: CategoriesReducer,
    cart: CartReducer
});