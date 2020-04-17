import { LOAD_ABOUT_DATA } from "../actions/types";

const initialState = {
    aboutData: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ABOUT_DATA:
            return {
                ...state
            }
        default:
            return state;
    }
};