
import { POSTER_ACTION_TYPES } from "./poster.types";

export const POSTER_INITIAL_STATE = {
    posters: [],
    isLoading: false,
    error: null,
};

export const posterReducer = (
    state = POSTER_INITIAL_STATE,
    action = {}
) => {
    const {type , payload} = action;

    switch(type) {
        case POSTER_ACTION_TYPES.FETCH_POSTER_START:
            return {...state , isLoading:true};
        case POSTER_ACTION_TYPES.FETCH_POSTER_SUCCESS:
            return {...state,isLoading: false,posters: payload}
        case POSTER_ACTION_TYPES.FETCH_POSTER_FAILED:
            return {...state,isLoading: false,error: payload}
        default:
            return state;        
    }
};