import { SET_LANGUAGE } from "./types";

export const setLanguage = (lang) => {
    return {
        type: SET_LANGUAGE,
        payload: lang
    }
};
