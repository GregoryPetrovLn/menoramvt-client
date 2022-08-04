import {GET_FILMS} from "./actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    list: null,
    dataById: null,
    isLoadingById: false
}

export const reducer = (state = initialState, {type, payload}) => {
    console.log(type, payload)
    switch (type) {
        case GET_FILMS.INIT:
            return {...state, dataById: null, list: null, error: null, isLoading: true}
        case GET_FILMS.SUCCESS:
            return {...state, list: payload.data, isLoading: false}
        case GET_FILMS.ERROR:
            return {...state, dataById: null, list: null, error: null, isLoading: false}
        default:
            return state
    }
}