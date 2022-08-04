import {GET_FILM_INFO, GET_FILMS} from "./actionTypes";
import axios from "axios";

export const getFilms = (title) => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_FILMS.INIT})
            const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/ombdb/films?s=${title}`)
            if (data.success === true) {
                dispatch({type: GET_FILMS.SUCCESS, payload: data})
            } else {
                dispatch({type: GET_FILMS.ERROR, payload: data.error})
            }
        } catch (e) {
            dispatch({type: GET_FILMS.ERROR})
        }
    }
}

export const getFilmById = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_FILM_INFO.INIT})
            const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/ombdb/films/${id}`)
            dispatch({type: GET_FILM_INFO.SUCCESS, payload: result.data})
        } catch (e) {
            dispatch({type: GET_FILM_INFO.ERROR})
        }
    }
}