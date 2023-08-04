import React from "react";
import Anchor from "../Anchor";
import "./style.css";

function Nav() {
  let data = [
    {
      href: "#",
      styles: "me-4 text-black ms-2",
      tittle: "My Tinerary",
      position: "col-5 text-start",
      name: "my-tinerary",
    },
    {
      href: "home.html",
      styles: "me-4 text-black",
      tittle: "Home",
      position: "col-1 text-end",
      name: "home",
    },
    {
      href: "cities.html",
      styles: "me-4 text-black",
      tittle: "Cities",
      position: "col-1",
      name: "cities",
    },
    {
      href: "login.html",
      styles: "btn btn-primary px-4",
      tittle: "Login",
      position: "col-1",
      name: "login",
    },
  ];
  return (
    <nav>
      <div class="row justify-content-center d-flex align-items-center">
        {data.map((each, key) => (
          <Anchor
            key={key}
            href={each.href}
            styles={each.styles}
            tittle={each.tittle}
            position={each.position}
            name={each.name}
          />
        ))}
      </div>
    </nav>
  );
}

export default Nav;
