import { SET_LANGUAGE } from "../actions/types";

const initialState = {
    currentLang: "az",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            if (action.payload === "") {
                return {
                    currentLang: "az"
                }
            } else {
                return {
                    currentLang: action.payload
                }
            }
        default:
            return state;
    }
};