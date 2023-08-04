import React from "react";
import "./style.css";

function Main() {
  return (
    <main class="container-fluid">
      <div class="row justify-content-center mainClass">
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
          <img src="src\assets\rectangule.png" alt="fill-img" />
        </div>
      </div>
      <div
        id="carouselDiv"
        class="row carousel slide content-center "
        data-bs-ride="carousel"
      >
        <div class="container text-center divPopular">
          <p>Popular Mytineraries</p>
        </div>
        <div class="carousel-inner imgDiv">
          <div
            class="carousel-item active container-fluid"
            data-bs-interval="10000"
          >
            <div class="d-flex justify-content-center">
              <div class="m-1 img1 row">
                <div class="textcontainer">
                  <p class="imgp">Tokyo</p>
                  <p class="imgsub">Japan</p>
                </div>
              </div>
              <div class="m-1 img2">
                <div class="textcontainer">
                  <p class="imgp">New york</p>
                  <p class="imgsub">Usa</p>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="m-1 img3">
                <div class="textcontainer">
                  <p class="imgp">París</p>
                  <p class="imgsub">France</p>
                </div>
              </div>
              <div class="m-1 img4">
                <div class="textcontainer">
                  <p class="imgp">Seoul</p>
                  <p class="imgsub">South Korea</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div class="d-flex justify-content-center">
              <div class="m-1 img1 row">
                <div class="textcontainer">
                  <p class="imgp">Tokyo</p>
                  <p class="imgsub">Japan</p>
                </div>
              </div>
              <div class="m-1 img2">
                <div class="textcontainer">
                  <p class="imgp">New york</p>
                  <p class="imgsub">Usa</p>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="m-1 img3">
                <div class="textcontainer">
                  <p class="imgp">París</p>
                  <p class="imgsub">France</p>
                </div>
              </div>
              <div class="m-1 img4">
                <div class="textcontainer">
                  <p class="imgp">Seoul</p>
                  <p class="imgsub">South Korea</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <div class="m-1 img1 row">
                <div class="textcontainer">
                  <p class="imgp">Tokyo</p>
                  <p class="imgsub">Japan</p>
                </div>
              </div>
              <div class="m-1 img2">
                <div class="textcontainer">
                  <p class="imgp">New york</p>
                  <p class="imgsub">Usa</p>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="m-1 img3">
                <div class="textcontainer">
                  <p class="imgp">París</p>
                  <p class="imgsub">France</p>
                </div>
              </div>
              <div class="m-1 img4">
                <div class="textcontainer">
                  <p class="imgp">Seoul</p>
                  <p class="imgsub">South Korea</p>
                </div>
              </div>
            </div>
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
