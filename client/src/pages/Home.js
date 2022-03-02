import React from "react";
import ContactList from "./../components/ContactList";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to={"/add"}>
                <Button>Add</Button>
            </Link>
            <ContactList />
        </div>
    );
}

export default Home;
