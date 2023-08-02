import React from "react";
import Style from "../Anchor";

export default function Anchor({ href, styles, tittle }) {
  return (
    <>
      <a href={href} className={styles}>
        {tittle}
      </a>
    </>
  );
}
