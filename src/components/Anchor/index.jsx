import React from "react";
import "./style.css";

export default function Anchor({ href, styles, icon, tittle, position, name }) {
  return (
    <>
      <div className={position}>
        <a href={href} id={name} className={styles}>
          {icon}
          {tittle}
        </a>
      </div>
    </>
  );
}
