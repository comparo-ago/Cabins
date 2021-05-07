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
            Start Buying Now
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
              <h3>Welcome to GuitarNation</h3>
              <p>
                Here you can find electric and acoustic guitars, basses, amps
                and effects.
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
              <h3>Wide variety of brands and models.</h3>
              <p>Fender, Gibson, Ibanez, Yamaha, Cort, and more.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="images/cover3A.jpg"
              alt="Background image 3"
            />
            <Carousel.Caption>
              <h3>Pedal Effects</h3>
              <p>
                Check our huge list of effects: reverb, chorus, distorsion,
                phaser, delay and more.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default HomePageContainer;
