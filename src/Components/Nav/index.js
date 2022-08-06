import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

import NavLink from "react-bootstrap/NavLink";

function Navigation() {
  //   const tabs = ["Gallery", "About"];

  return (
    <Navbar
      scrolling
      expand="md"
      fixed="top"
      id="navbar"
      className="justify-content-end"
    >
      <Nav id="navContent">
        <Nav.Link className="galleryLink" href="#home">
          Gallery
        </Nav.Link>
        <Nav.Link className="aboutLink" href="#features">
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
