import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delContact } from "./../redux/actions/contact";
function ContactCard({ contacts }) {
    const dispatch = useDispatch();
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>{contacts.name}</ListGroup.Item>
                    <ListGroup.Item>{contacts.email}</ListGroup.Item>
                    <ListGroup.Item>{contacts.phone}</ListGroup.Item>
                    <Button onClick={() => dispatch(delContact(contacts._id))}>DELETE</Button>
                </ListGroup>
            </Card>
        </div>
    );
}

export default ContactCard;
