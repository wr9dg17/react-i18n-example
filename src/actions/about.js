import { LOAD_ABOUT_DATA } from "./types";

export const loadAboutData = () => (dispatch, getState) => {
    let { lang: { currentLang } } = getState();
    console.log(`${currentLang}/api/about`);
    
    dispatch({ type: LOAD_ABOUT_DATA });
};
