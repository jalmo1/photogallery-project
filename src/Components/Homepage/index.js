import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Carousel from "react-elastic-carousel";
import Items from "../Carousel/items";
import heroBackground from "../../Assets/Images/background.jpg";
import villaPR from "../../Assets/Images/caroPics/PRview.jpg";
import PRmountain from "../../Assets/Images/caroPics/PRmountain.jpg";
import audi from "../../Assets/Images/caroPics/audiCNC.jpg";
import babyShoot1 from "../../Assets/Images/caroPics/babyBeach5.jpg";
import lexusPic from "../../Assets/Images/caroPics/lexCNC.jpg";
import brzPic from "../../Assets/Images/caroPics/brzCNC.jpg";
import mountain from "../../Assets/Images/caroPics/moutainRoad.jpg";
import colMountain from "../../Assets/Images/caroPics/colMountain.jpg";

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
            <Col xs={6} md={4}>
              <h4>
                -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </h4>
            </Col>
            <Col xs={6} md={4}>
              <h1>
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
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <Items>
            <img className="caroImage" src={mountain} alt="Road leading into the mountains in Colorado"></img>
          </Items>
          <Items>
            <img className="caroImage" src={villaPR} alt="Villa in Puerto Rico"></img>
            </Items>
            <Items>
            <img className="caroImage" src={audi} alt="Audi at a car show"></img>
            </Items>
            <Items>
            <img className="caroImage" src={PRmountain} alt="Mountain in Puerto Rico"></img>
            </Items> 
            <Items>
            <img className="caroImage" src={babyShoot1} alt="Pregnancy shoot at the beach"></img>
            </Items>
            <Items>
            <img className="caroImage" src={lexusPic} alt="Lexus SC400 at a car show"></img>
            </Items>
            <Items>
            <img className="caroImage" src={brzPic} alt="BRZ at a car show"></img>
            </Items>
            <Items>
            <img className="caroImage" src={colMountain} alt="Mountain in Colorado"></img>
            </Items>
        </Carousel>
      </div>
    </div>
  );
}

export default Homepage;
