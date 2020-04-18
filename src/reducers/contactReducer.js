import { LOAD_CONTACT_DATA } from "../actions/types";

const initialState = {
    contactData: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTACT_DATA:
            return {
                ...state,
            };
        default:
            return state;
    }
};
