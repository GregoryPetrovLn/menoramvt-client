import {GET_FILMS} from "./actionTypes";
import axios from "axios";

export const getFilms = () => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_FILMS.INIT})
            const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/ombdb/films?s=Batman`)
            dispatch({type: GET_FILMS.SUCCESS, payload: result.data})
        } catch (e) {
            console.log(e)
            dispatch({type: GET_FILMS.ERROR})
        }
    }
}