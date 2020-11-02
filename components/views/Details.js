import React from "react";
import Carousel from "../Details/Carousel/Carousel";
import Heading from "../Details/Heading/Heading";
import Info from "../Details/Info/Info";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Details = () => (
  <main className="blue-bg">
    <Header />
    <Heading />
    <Carousel />
    <Info />
    <Footer />
  </main>
);

export default Details;
