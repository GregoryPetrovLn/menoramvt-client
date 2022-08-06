import {GET_FILM_INFO, GET_FILMS, TOGGLE_MODAL_INFO} from "./actionTypes";
import axios from "axios";

export const getFilms = (title) => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_FILMS.INIT})
            const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/omdb/films?s=${title}`)
            dispatch({type: GET_FILMS.SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: GET_FILMS.ERROR, payload: e.response.data.error})
        }
    }
}

export const getFilmById = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_FILM_INFO.INIT})
            const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/omdb/films/${id}`)
            dispatch({type: GET_FILM_INFO.SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: GET_FILM_INFO.ERROR, payload: e.response.data.error})
        }
    }
}

export const modalTogglerAction = (payload) => ({type: TOGGLE_MODAL_INFO, payload})