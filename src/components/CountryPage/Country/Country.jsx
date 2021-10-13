import React from "react";
import {Link} from "react-router-dom";
import {Card, Button} from 'react-bootstrap';

const Country = ({flag, name, code}) => {
    return (
        <Card style={{width: '16rem', margin:"1rem 4rem"}} bg="dark" text="white">
            <Card.Img variant="top" src={flag} alt={code} style={{height:"6rem"}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="outline-light" >
                    <Link to={`/details/${name}`} style={{textDecoration:"none", color:"#e2bb4d"}}>More Details</Link>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Country;
