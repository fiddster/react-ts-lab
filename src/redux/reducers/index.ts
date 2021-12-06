import {combineReducers} from "redux";
import dictionaryReducer from "./dictionaryReducer";
import encounterReducer from "./encounterReducer";
import { uiStatusReducer } from "./uiStatusReducer";

export const reducers = combineReducers({
    encounter: encounterReducer,
    uiStatus: uiStatusReducer,
    dictionary: dictionaryReducer,
});