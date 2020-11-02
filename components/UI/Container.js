import React from "react";

const Container = ({ children, className = null }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
