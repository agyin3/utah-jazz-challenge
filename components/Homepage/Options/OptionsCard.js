import React from "react";

const OptionsCard = ({ img, link, text }) => {
  return (
    <div className="option-container">
      <span
        className="flex option-bg"
        style={{
          backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
    ),
    url(${img})
  `,
        }}
      >
        <a className="option-link" href={link}>
          {text}
        </a>
      </span>
    </div>
  );
};

export default OptionsCard;
