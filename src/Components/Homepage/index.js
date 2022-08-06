import React from "react";
import Container from "react-bootstrap/Container";
import heroBackground from "../../Assets/Images/background.jpg";

function Homepage() {
  return (
    <div className="heroContainer">
      <img
        className="heroBG"
        src={heroBackground}
        alt="A cars steering wheel"
      ></img>
      <div className="heroText">
        <p>TESTING TESTING</p>
      </div>
    </div>
  );
}

export default Homepage;
