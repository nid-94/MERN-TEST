import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getContacts } from "./../redux/actions/contact";
import ContactCard from "./ContactCard";

function ContactList() {
    const dispatch = useDispatch();
    const contactList = useSelector((state) => state.contactReducer.contactList);
    const load = useSelector((state) => state.contactReducer.load);

    useEffect(() => {
        dispatch(getContacts());
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {load ? <p>loooadiing</p> : contactList?.map((el) => <ContactCard contacts={el} />)}
        </div>
    );
}

export default ContactList;
