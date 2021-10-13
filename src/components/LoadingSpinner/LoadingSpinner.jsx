// Libraries
import React from 'react';
import {Spinner} from "react-bootstrap";

const LoadingSpinner = () => {
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
            <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default LoadingSpinner;