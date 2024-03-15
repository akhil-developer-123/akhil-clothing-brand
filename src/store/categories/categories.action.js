import { createAction } from "../utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = (categories) => createAction(
    CATEGORIES_ACTION_TYPES.setCategories, categories);