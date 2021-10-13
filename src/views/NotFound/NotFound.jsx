// Libraries
import React from "react";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

// Styles
import "./NotFound.styles.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Error: 404</h2>
            <p>Not Found</p>
            <Button variant="danger">
                <Link to={`/`}>Back Home</Link>
            </Button>
        </div>
    );
};

export default NotFound;