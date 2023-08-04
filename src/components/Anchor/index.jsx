import React from "react";
import "./style.css";

export default function Anchor({ href, styles, tittle, position, name }) {
  return (
    <>
      <div className={position}>
        <a href={href} id={name} className={styles}>
          {tittle}
        </a>
      </div>
    </>
  );
}
