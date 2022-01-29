import {combineReducers} from "redux";
import { uiStatusReducer } from "./uiStatus";
import dictionaryReducer from "./dictionary";
import encounterReducer from "./encounter";
import documentsReducer from "./documents";

export const reducers = combineReducers({
    encounter: encounterReducer,
    uiStatus: uiStatusReducer,
    dictionary: dictionaryReducer,
    documents: documentsReducer,
});