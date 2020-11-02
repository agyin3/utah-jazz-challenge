import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const About = () => (
  <div className="flex info-containers info-padding">
    <h2 className="info-heading">ABOUT</h2>
    <div className="about-content">
      <FontAwesomeIcon
        className="info-heading benefits-icon"
        icon="street-view"
      />
      <span>
        <h2 className="info-heading">Location</h2>
        <p className="info-text">Suite Level (Level 4)</p>
        <a className="about-link">View Arena Map</a>
      </span>
    </div>
    <div className="about-content">
      <FontAwesomeIcon className="info-heading benefits-icon" icon="users" />
      <span>
        <h2 className="info-heading">Capacity</h2>
        <p className="info-text">
          Accommodates 18–32 <br /> people
        </p>
      </span>
    </div>
    <div className="about-content">
      <FontAwesomeIcon
        className="info-heading benefits-icon"
        icon={["far", "lightbulb"]}
      />
      <span>
        <h2 className="info-heading">Event Availability</h2>
        <p className="info-text">
          Utah Jazz Games
          <br /> (including playoffs)
        </p>
        <p className="info-text">Concerts and select special events</p>
      </span>
    </div>
  </div>
);

export default About;
