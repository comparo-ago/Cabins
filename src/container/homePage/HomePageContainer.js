import React from "react";
import { Container, Carousel, Button, Row } from "react-bootstrap";
import "./HomePageContainer.css";
import { useHistory } from "react-router-dom";

function HomePageContainer() {
  let history = useHistory();

  return (
    <div>
      <Container className="home-container">
        <Row className="justify-content-center">
          <Button
            onClick={() => history.push("/all")}
            className="home-container--button"
            size="lg"
          >
            Compre Ahora 
          </Button>
        </Row>
        <Carousel id="carousel">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="images/cover1A.jpg"
              alt="Background image 1"
            />
            <Carousel.Caption>
              <h3>Bienvenido a Kusikuy </h3>
              <p>
                Aquí puede encontrar el modelo de cabaña que mas le guste
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="images/cover2A.jpg"
              alt="Background image 2"
            />
            <Carousel.Caption>
              <h3>Gran variedad de productos de primera marca </h3>
              <p>cedro, pino,  , etc.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="images/cover3A.jpg"
              alt="Background image 3"
            />
            <Carousel.Caption>
              <h3>griferia de alta calidad</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default HomePageContainer;
