import React from "react";
import Anchor from "../Anchor";
import { LINKS } from "../../variables/const";
import "./style.css";

export default function Nav() {
  return (
    <nav>
      <div class="row justify-content-center d-flex align-items-center">
        {LINKS.map((each, key) => (
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
