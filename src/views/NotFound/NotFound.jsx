import React from "react";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const NotFound = () => {
    return (
        <div
            style={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <h2 style={{ fontSize: "7rem", color: "red" }}>Error: 404</h2>
            <p style={{ color: "red", fontSize:"larger" }}>Not Found</p>
            <Button variant="danger" >
                <Link to={`/`} style={{textDecoration:"none", color:"white"}}>Back Home</Link>
            </Button>
        </div>
    );
};

export default NotFound;