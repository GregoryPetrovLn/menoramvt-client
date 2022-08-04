import {GET_FILM_INFO, GET_FILMS, TOGGLE_MODAL_INFO} from "./actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    list: null,
    dataById: null,
    isLoadingById: false,
    isOpenModal: false
}

export const reducer = (state = initialState, {type, payload}) => {
    console.log(type, payload)
    console.log(initialState)

    switch (type) {
        case GET_FILMS.INIT:
            return {...state, dataById: null, list: null, error: null, isLoading: true}
        case GET_FILMS.SUCCESS:
            return {...state, list: payload.data, isLoading: false}
        case GET_FILMS.ERROR:
            return {...state, dataById: null, list: null, error: payload, isLoading: false}

        case GET_FILM_INFO.INIT:
            return {...state, isLoadingById: true, dataById: null, error: null}
        case GET_FILM_INFO.SUCCESS:
            return {...state, isLoadingById: false, dataById: payload.data, error: null}
        case GET_FILM_INFO.ERROR:
            return {...state, isLoadingById: false, dataById: null, error: payload,isOpenModal:false}

        case TOGGLE_MODAL_INFO:
            return {...state, isOpenModal: payload}
        default:
            return state
    }
}