import React from "react";

const Card = ({ heading, info, image }) => (
  <div className="card-container">
    <img className="card-image" src={image} alt={`Inside view of ${heading}`} />
    <div className="card-text-container">
      <h2 className="card-heading yellow-text">{heading}</h2>
      <p className="card-info">{info}</p>
      <a className="yellow-text card-link link-button">Learn More</a>
    </div>
  </div>
);

export default Card;
