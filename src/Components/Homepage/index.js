import React from "react";
import heroBackground from "../../Assets/Images/background.jpg";
// import { Container } from "react-bootstrap";

function Homepage() {
  return (
    <div>
      <div>
        <img
          className="heroBG"
          src={heroBackground}
          alt="Picture of a cars steering wheel"
        ></img>
      </div>
    </div>
  );
}

export default Homepage;
