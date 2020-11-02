import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/global.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
