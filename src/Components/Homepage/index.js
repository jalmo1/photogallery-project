import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import heroBackground from "../../Assets/Images/background.jpg";
import Gallery from "../Gallery";

function Homepage() {
  return (
    <div className="heroContainer">
      <img
        className="heroBG"
        src={heroBackground}
        alt="A cars steering wheel"
      ></img>

      <div id="secondaryText">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h4>
                -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </h4>
            </Col>
            <Col xs={6} md={4}>
              <h1 className="brandName">
                Rosa Photography
              </h1>
            </Col>
            <Col xs={6} md={4}>
              <h4>
                -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
}

export default Homepage;
