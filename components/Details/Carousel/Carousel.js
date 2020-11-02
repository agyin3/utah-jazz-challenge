import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import suiteDetail from "../../../assets/img/suite-detail.jpg";
import suites from "../../../assets/img/suites.jpg";
import clubs from "../../../assets/img/clubs.jpg";
import "./carousel.module.css";
import CarouselInfo from "./CarouselInfo";

const images = [suiteDetail, clubs, suites];

const Carousel = () => {
  const [image, setImage] = useState(0);

  const viewRight = (image) => {
    image === images.length - 1 ? setImage(0) : setImage(image + 1);
  };

  const viewLeft = (image) => {
    image === 0 ? setImage(images.length - 1) : setImage(image - 1);
  };
  console.log(images[1]);

  return (
    <section>
      <div className="carousel-container">
        <img
          className="carousel-image"
          src={images[image]}
          alt="Inside view of suite"
        />
        <div className="flex carousel-cntrl-wrapper">
          <FontAwesomeIcon
            className="carousel-cntrl yellow-text"
            icon="angle-left"
            onClick={() => viewLeft(image)}
          />
          <FontAwesomeIcon
            className="carousel-cntrl yellow-text"
            icon="angle-left"
            rotation={180}
            onClick={() => viewRight(image)}
          />
        </div>
        <div className="carousel-idx">
          {images.map((img, idx) => (
            <FontAwesomeIcon
              className={`carousel-page ${
                idx === image ? "yellow-text" : null
              }`}
              icon="circle"
            />
          ))}
        </div>
      </div>
      <CarouselInfo />
    </section>
  );
};

export default Carousel;
