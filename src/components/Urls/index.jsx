import React from "react";

export default function Urls({ imageClass, city, country }) {
  return (
    <>
      <div className={imageClass}>
        <div className="textcontainer">
          <p className="imgp">{city}</p>
          <p className="imgsub">{country}</p>
        </div>
      </div>
    </>
  );
}
