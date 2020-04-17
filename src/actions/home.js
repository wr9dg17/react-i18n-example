import { LOAD_HOME_DATA } from "./types";

export const loadHomeData = () => (dispatch, getState) => {
    let { lang: { currentLang } } = getState();
    console.log(`${currentLang}/api/home`);
    
    dispatch({ type: LOAD_HOME_DATA });
};
