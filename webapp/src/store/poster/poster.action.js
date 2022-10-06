
import axios from 'axios';
export const getPoster = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'LOADING_START'});
            await axios.get(`https://jsonplaceholder.typicode.com/posters/${id}`)
        } catch (error) {
            console.log('get error',error)
        } finally {
            dispatch({type: 'LOADING_END'});
        }
    }
}

export const getPosterList = () => {
    return async (dispatch) => {
        try { 
            dispatch({type: 'LOADING_START'});
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posters`);
            dispatch({type: 'GET_POSTER_LISTS' , payload: response.data});
        } catch (error) {
            console.log('get all post error',error);
        } finally {
            dispatch({type: 'LOADING_END'})
        }
    }
}

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

