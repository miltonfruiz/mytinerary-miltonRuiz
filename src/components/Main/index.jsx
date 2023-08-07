import React from "react";
import "./style.css";
import Carousel from "../Carousel";

function Main() {
  return (
    <main>
      <div class="justify-content-center d-flex align-items-center mainClass col-8">
        <div class="col-4 text-start ">
          <h3 class="col mb-4" id="find">
            Find the perfect destination
          </h3>
          <h6 class="col mb-4 text-start" id="our">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </h6>
          <button type="button" id="view" class="btn btn-primary px-5 mb-1">
            Viem More
          </button>
        </div>
        <div class="col-4 text-end">
          <img src="" alt="" />
        </div>
      </div>
      <Carousel />
    </main>
  );
}

export default Main;
