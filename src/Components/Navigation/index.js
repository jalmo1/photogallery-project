import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Navigation(props) {
    const tabs = ["Gallery", "About"];

  return (
    <Container fluid>
       <Row>
         <Navbar
          scrolling
          expand="md"
          fixed="top"
          id="navbar"
          className="position-absolute navContent">
          <Col md={4}>
          </Col>
          <Col xs={6}></Col>
          <Col>
            <nav>
              <ul>
                {tabs.map((tab) => (
                  <li>
                    <a
                      href={"#" + tab.toLowerCase()}
                      // Whenever a tab is clicked on,
                      // the current page is set through the handlePageChange props.
                      onClick={() => props.handlePageChange(tab)}
                      className={
                        props.currentPage === tab ? "nav-link active" : "nav-link"
                      }
                    >
                      {tab}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Navigation;




// <Container fluid>
//       <Row>
//         <Navbar
//           scrolling
//           expand="md"
//           fixed="top"
//           id="navbar"
//           className="position-absolute">
//           <Col md={4}>
//           </Col>
//           <Col xs={6}></Col>
//           <Col>
//             <Nav id="navContent">
//               <Nav.Link className="galleryLink" href="#gallery">
//                 Gallery
//               </Nav.Link>
//               <Nav.Link className="aboutLink" href="#about">
//                 About
//               </Nav.Link>
//             </Nav>
//           </Col>
//         </Navbar>
//       </Row>
//     </Container>
//   );