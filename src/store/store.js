import { rootReducer } from "./root-reducer";
import { legacy_createStore as createStore, compose, applyMiddleware } from "redux"; 
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from 'redux-thunk';
import { rootSaga } from "./root-saga"; 
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [ logger, sagaMiddleware ];

const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);  

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

