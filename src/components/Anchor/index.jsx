import React from "react";
import Style from "../Anchor";

export default function Anchor({ href, clase, contenido }) {
  return (
    <>
      <a href={href} className={clase}>
        {contenido}
      </a>
    </>
  );
}
