// Libraries
import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Countries Data App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
