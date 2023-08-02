import React from "react";
import Anchor from "../Anchor";

function Nav() {
  let data = [
    { link: "#", styles: "me-4 text-black", tittle: "My Tinerary" },
    { link: "home.html", styles: "me-4 text-black", tittle: "Home" },
    { link: "cities.html", styles: "me-4 text-black", tittle: "Cities" },
    {
      link: "login.html",
      styles: "btn btn-primary px-4 mb-1",
      tittle: "Login",
    },
  ];
  return (
    <nav>
      {data.map((each, key) => (
        <Anchor
          key={key}
          link={each.link}
          styles={each.styles}
          tittle={each.tittle}
        />
      ))}
    </nav>
  );
}

export default Nav;
