import { combineReducers } from "redux";
import langReducer from "./langReducer";
import homeReducer from "./homeReducer";
import aboutReducer from "./aboutReducer";
import contactReducer from "./contactReducer";

export default combineReducers({
    lang: langReducer,
    home: homeReducer,
    about: aboutReducer,
    contact: contactReducer
});