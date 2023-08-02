import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <div className="row justify-content-center">
          <div className="col-4 text-start">
            <a href="./index.html" id="home" className="ms-2 text-black">
              My Tinerary
            </a>
          </div>
          <div className="col-4 text-end">
            <a href="./index.html" id="home" className="me-4 text-black">
              Home
            </a>
            <a href="./cities.html" id="cities" className="me-4 text-black">
              Cities
            </a>
            <a href="./login" id="login" className="btn btn-primary px-4 mb-1">
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
