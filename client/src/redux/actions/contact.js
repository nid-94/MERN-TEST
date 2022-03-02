import { GET_CONTACTS, LOAD_CONTACTS, FAIL_CONTACTS } from "./../actionTypes/contact";
import axios from "axios";

// get all
export const getContacts = () => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
        let result = await axios.get("/api/contacts");
        dispatch({
            type: GET_CONTACTS,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAIL_CONTACTS,
            payload: error.response,
        });
    }
};

// post
export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post("/api/contacts/", newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
// delete
export const delContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contacts/dele/${id}`);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
