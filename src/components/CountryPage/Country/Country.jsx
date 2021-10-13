// Libraries
import React from "react";
import {Link} from "react-router-dom";
import {Card, Button} from 'react-bootstrap';

// Styles
import "./Country.styles.css";

const Country = ({flag, name, code}) => {
    return (
        <Card className="country" bg="dark" text="white">
            <Card.Img variant="top" src={flag} alt={code}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="outline-light">
                    <Link to={`/details/${name}`}>More Details</Link>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Country;
