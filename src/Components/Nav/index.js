import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../Assets/Images/logo.png";

function Navigation() {
  //   const tabs = ["Gallery", "About"];

  return (
    <Container fluid>
      <Row>
        <Navbar
          scrolling
          expand="md"
          fixed="top"
          id="navbar"
          className="position-absolute"
        >
          <Col md={4}>
            {/* <img src={logo} alt="camera" height={100}></img> */}
            <h1 className="navBrandName">Rosa Photography</h1>
          </Col>
          <Col xs={6}></Col>
          <Col>
            <Nav id="navContent">
              <Nav.Link className="galleryLink" href="#home">
                Gallery
              </Nav.Link>
              <Nav.Link className="aboutLink" href="#features">
                About
              </Nav.Link>
            </Nav>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Navigation;
