import React from "react";

function Main() {
  return (
    <main className="container-fluid">
      <div className="row justify-content-center mainClass">
        <div className="col-4 text-start ">
          <h3 className="col mb-4" id="find">
            Find the perfect destination
          </h3>
          <h6 className="col mb-4 text-start" id="our">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </h6>
          <button type="button" id="view" class="btn btn-primary px-5 mb-1">
            Viem More
          </button>
        </div>
        <div className="col-4 text-start">
          <img src="" alt="" />
        </div>
      </div>
    </main>
  );
}

export default Main;
