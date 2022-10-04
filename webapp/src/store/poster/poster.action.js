import { POSTER_ACTION_TYPES } from "./poster.types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchPosterStart = () => {
    createAction(POSTER_ACTION_TYPES.FETCH_POSTER_START);
};

export const fetchPosterSuccess = (posterArray) => {
    createAction(POSTER_ACTION_TYPES.FETCH_POSTER_SUCCESS,posterArray);
};

export const fetchPosterFailed = (error) => {
    createAction(POSTER_ACTION_TYPES.FETCH_POSTER_FAILED,error);
};