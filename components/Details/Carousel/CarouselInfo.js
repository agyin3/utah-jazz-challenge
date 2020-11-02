import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "../../UI/Container";

const CarouselInfo = () => {
  return (
    <div className="carousel-info">
      <Container className="flex">
        <FontAwesomeIcon className="carousel-info-icon" icon="info-circle" />
        <p>
          Did you know? Whether you're closing an important business deal or
          celebrating with your employees, renting a suite for a Jazz game is
          perfect for any occasion. Call or text 801.325.2203 to learn more.
        </p>
      </Container>
    </div>
  );
};

export default CarouselInfo;
