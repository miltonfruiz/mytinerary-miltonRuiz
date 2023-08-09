import React from "react";
import "./style.css";
import Carousel from "../Carousel";
import Welcome from "../Welcome";

function Main() {
  return (
    <main>
      <Welcome />
      <p>Call to action</p>
      <Carousel />
    </main>
  );
}

export default Main;
