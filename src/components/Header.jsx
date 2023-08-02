import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <a href="./index.html" id="home" className="me-4 text-black">
          Home
        </a>
        <a href="./cities.html" id="cities" className="me-4 text-black">
          Cities
        </a>
        <a href="./login" id="login" className="btn btn-primary px-4 mb-1">
          Login
        </a>
      </nav>
    </header>
  );
}

export default Header;
