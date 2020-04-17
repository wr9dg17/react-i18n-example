import { LOAD_CONTACT_DATA } from "./types";

export const loadContactData = () => (dispatch, getState) => {
    let { lang: { currentLang } } = getState();
    console.log(`${currentLang}/api/contact`);
    
    dispatch({ type: LOAD_CONTACT_DATA });
};
