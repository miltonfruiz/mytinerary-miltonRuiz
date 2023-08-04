import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <div class="row justify-content-center">
          <div class="col-4 text-start">
            <a href="./index.html" id="home" class="ms-2 text-black">
              My Tinerary
            </a>
          </div>
          <div class="col-4 text-end">
            <a href="./index.html" id="home" class="me-4 text-black">
              Home
            </a>
            <a href="./cities.html" id="cities" class="me-4 text-black">
              Cities
            </a>
            <a href="./login" id="login" class="btn btn-primary px-4 mb-1">
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
