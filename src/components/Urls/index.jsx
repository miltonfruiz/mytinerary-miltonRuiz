import React from "react";

export default function Urls({ numberImage, city, country }) {
  return (
    <>
      <div className={numberImage}>
        <div className="textcontainer">
          <p className="imgp">{city}</p>
          <p className="imgsub">{country}</p>
        </div>
      </div>
    </>
  );
}
