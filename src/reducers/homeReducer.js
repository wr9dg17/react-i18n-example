import { LOAD_HOME_DATA } from "../actions/types";

const initialState = {
    homeData: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_HOME_DATA:
            return {
                ...state
            }
        default:
            return state;
    }
};