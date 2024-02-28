import { rootReducer } from "./root-reducer";
import { legacy_createStore as createStore, compose, applyMiddleware } from "redux"; 
import logger from "redux-logger";


const middleWares = [ logger ];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);