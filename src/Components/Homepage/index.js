import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Carousel from "react-elastic-carousel";
import Items from "../Carousel/items";
import heroBackground from "../../Assets/Images/background.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

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
            <Col md={4}>
              <h4>
                -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </h4>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <h4>
                -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <Items>
            <img className="caroImage" src={heroBackground} alt="car"></img>
          </Items>
          <Items className="caroImage">Two</Items>
          <Items className="caroImage">Three</Items>
          <Items className="caroImage">Four</Items>
          <Items className="caroImage">Five</Items>
          <Items className="caroImage">Six</Items>
          <Items className="caroImage">Seven</Items>
          <Items className="caroImage">Eight</Items>
        </Carousel>
      </div>
    </div>
  );
}

export default Homepage;
