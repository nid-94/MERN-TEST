import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/contact";
import { Button } from "react-bootstrap";

function Add() {
    const dispatch = useDispatch();
    const [newContact, setNewContact] = useState({ name: "", email: "", phone: "" });
    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };
    const add = () => {
        dispatch(addContact(newContact));
    };
    return (
        <div>
            <h1>ADD Page</h1>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                placeholder="enter your name here"
                onChange={handleChange}
            />
            <label htmlFor="email">email</label>
            <input
                type="email"
                name="email"
                placeholder="enter your email here"
                onChange={handleChange}
            />
            <label htmlFor="name">phone</label>
            <input
                type="text"
                name="phone"
                placeholder="enter your phone here"
                onChange={handleChange}
            />
            <Button onClick={() => add()}>ADD</Button>
        </div>
    );
}

export default Add;
