
import { all, call, takeLatest, put } from 'redux-saga/effects';
import { getCategoriesAndDocumentsFromFirestore } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess,fetchCategoriesFailed } from "./categories.action"; 
import { CATEGORIES_ACTION_TYPES } from './categories.types';


export function* fetchCategoriesAsync() {
    try {
        const categories_data = yield call(getCategoriesAndDocumentsFromFirestore);
        yield put(fetchCategoriesSuccess(categories_data));
    } catch(error) {
        yield put(fetchCategoriesFailed(error));
    }
} 

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}