import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Gallery () {

return (
    <main className="galleryPage">
        <div>
            <Container fluid>
                <Row>
                    <Col xs={6} md={4}>
                        <h1 className="galleryTitle">Photo Gallery</h1>
                        <br></br>
                    </Col>
                </Row>
            </Container>
        </div>
        <div>

        </div>
    </main>
    );
}

export default Gallery;