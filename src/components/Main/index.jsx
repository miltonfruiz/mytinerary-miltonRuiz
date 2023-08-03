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
        <div className="col-4 text-end">
          <img src="src\assets\rectangule.png" alt="fill-img" />
        </div>
      </div>
      <div id="carouselDiv" class="row carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner row">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="src\assets\tokio\tokio1.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
            <img
              src="src\assets\tokio\tokio1.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
            <img
              src="src\assets\tokio\tokio1.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
            <img
              src="src\assets\tokio\tokio1.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="src\assets\tokio\tokio2.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
            <img
              src="src\assets\tokio\tokio2.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
            <img
              src="src\assets\tokio\tokio2.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
            <img
              src="src\assets\tokio\tokio2.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              src="src\assets\tokio\tokio3.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
            <img
              src="src\assets\tokio\tokio3.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
            <img
              src="src\assets\tokio\tokio3.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
            <img
              src="src\assets\tokio\tokio3.png"
              class=""
              alt="..."
              width="200"
              height="200"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDiv"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselDiv"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
}

export default Main;
