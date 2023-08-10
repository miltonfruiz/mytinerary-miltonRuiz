import React from "react";
import { FaHandPointer } from "react-icons/fa";

export default function Welcome() {
  return (
    <div class="justify-content-center d-flex align-items-center mainClass col-8">
      <div class="col-6 text-start ">
        <h3 class="col-8 mb-4" id="find">
          Find the perfect destination
        </h3>
        <h6 class="col-8 mb-4 text-start" id="our">
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </h6>
        <button
          type="button"
          id="view"
          class="btn btn-primary px-5 mb-1 viewBoton"
        >
          <p className="viewText">Viem More</p>

          <div>
            <FaHandPointer size={25} />
          </div>
        </button>
      </div>
      <div class="col-4 text-end">
        <img src="" alt="" />
      </div>
    </div>
  );
}
