import React from "react";

const About = () => (
  <div className="flex info-containers">
    <h2 className="info-heading">ABOUT</h2>
    <div>
      <h3 className="info-heading">Location</h3>
      <p className="info-text">Suite Level (Level 4)</p>
      <a className="about-link">View Arena Map</a>
    </div>
    <div>
      <h3 className="info-heading">Capacity</h3>
      <p className="info-text">
        Accommodates 18–32 <br /> people
      </p>
    </div>
    <div>
      <h3 className="info-heading">Event Availability</h3>
      <p className="info-text">
        Utah Jazz Games
        <br /> (including playoffs)
      </p>
      <p className="info-text">Concerts and select special events</p>
    </div>
  </div>
);

export default About;
