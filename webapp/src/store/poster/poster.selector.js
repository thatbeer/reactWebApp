import { combineReducers } from "redux";

import { posterReducer } from "./poster.reducer";

export const rootReducer = combineReducers({
    poster: posterReducer,
});