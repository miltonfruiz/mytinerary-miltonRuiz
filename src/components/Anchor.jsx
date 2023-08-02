import React from "react";

export default function Anchor({ href, clase, contenido }) {
  return (
    <>
      <a href={href} className={clase}>
        {contenido}
      </a>
    </>
  );
}
