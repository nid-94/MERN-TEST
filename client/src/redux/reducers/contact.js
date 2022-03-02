// import
import { FAIL_CONTACTS, LOAD_CONTACTS, GET_CONTACTS } from "./../actionTypes/contact";

// initiale state
const initialeState = {
    contactList: [],
    error: null,
    load: false,
};

const contactReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
        case LOAD_CONTACTS:
            return { ...state, load: true };

        case GET_CONTACTS:
            return { ...state, load: false, contactList: payload.contactList };

        case FAIL_CONTACTS:
            return { ...state, load: false, error: payload };

        default:
            return state;
    }
};
export default contactReducer;
