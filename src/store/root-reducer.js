import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer"; 


// a combination of all reducers
export const rootReducer = combineReducers({
    user: UserReducer
});