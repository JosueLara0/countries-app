// Libraries
import React from "react";
import { Spinner } from "react-bootstrap";

// Styles
import "./LoadingSpinner.styles.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

export default LoadingSpinner;
