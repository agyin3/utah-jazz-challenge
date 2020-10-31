import React from "react";
import "./container.module.css";

const Container = ({ children }) => {
  console.log(children);
  return <div className="container">{children}</div>;
};

export default Container;
