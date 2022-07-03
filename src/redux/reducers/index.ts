import {combineReducers} from "redux";
import { uiStatusReducer } from "./uiStatus";
import dictionaryReducer from "./dictionary";
import encounterReducer from "./encounter";
import documentsReducer from "./documents";
import { withTabs } from "../reducersHigherOrder/withTabs";

export const reducers = combineReducers({
    encounter: withTabs(encounterReducer),
    uiStatus: uiStatusReducer,
    dictionary: dictionaryReducer,
    documents: documentsReducer,
});