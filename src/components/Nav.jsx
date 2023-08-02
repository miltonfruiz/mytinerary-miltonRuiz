import React from "react";
import Anchor from "./Anchor";

function Nav() {
  let data = [
    { href: "home.html", clase: "me-4 text-black", titulo: "Home" },
    { href: "cities.html", clase: "me-4 text-black", titulo: "Cities" },
    {
      href: "login.html",
      clase: "btn btn-primary px-4 mb-1",
      titulo: "Login",
    },
  ];
  return (
    <nav>
      {data.map((each) => (
        <Anchor href={each.href} clase={each.clase} titulo={each.titulo} />
      ))}
    </nav>
  );
}

export default Nav;
