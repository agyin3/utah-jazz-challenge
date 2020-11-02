import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import suiteDetail from "../../../assets/img/suite-detail.jpg";
import "./carousel.module.css";
import CarouselInfo from "./CarouselInfo";
const Carousel = () => {
  return (
    <section>
      <div className="carousel-container">
        <img className="carousel-image" src={suiteDetail} />
        <div className="flex carousel-cntrl-wrapper">
          <FontAwesomeIcon
            className="carousel-cntrl yellow-text"
            icon="angle-left"
          />
          <FontAwesomeIcon
            className="carousel-cntrl yellow-text"
            icon="angle-left"
            rotation={180}
          />
        </div>
        <div className="carousel-idx">
          <FontAwesomeIcon
            className="carousel-page yellow-text"
            icon="circle"
          />
          <FontAwesomeIcon className="carousel-page" icon="circle" />
          <FontAwesomeIcon className="carousel-page" icon="circle" />
        </div>
      </div>
      <CarouselInfo />
    </section>
  );
};

export default Carousel;
