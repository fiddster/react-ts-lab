import {combineReducers} from "redux";
import { uiStatusReducer } from "./uiStatus";
import dictionaryReducer from "./dictionary";
import encounterReducer from "./encounter";
import documentsReducer from "./documents";
import spellsReducer from "./spells";

export const reducers = combineReducers({
    dictionary: dictionaryReducer,
    documents: documentsReducer,
    encounter: encounterReducer,
    spells: spellsReducer,
    uiStatus: uiStatusReducer,
});