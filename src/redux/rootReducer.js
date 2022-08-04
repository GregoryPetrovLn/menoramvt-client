import {combineReducers} from "redux";
import {reducer as films} from "../views/films/redux/reducer";

export const rootReducer = combineReducers({
    films
})