import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

function Navigation() {
  //   const tabs = ["Gallery", "About"];

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Photography project</Navbar.Brand>
        <Col md={{ span: 4, offset: 4 }}>
          <Nav className="me-auto">
            <Nav.Link href="#home">Gallery</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Navigation;
