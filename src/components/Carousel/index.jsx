import React, { useState } from "react";
import "./style.css";
import { FIRST, SECOND, THIRD } from "../../variables/const";
import Map from "../Map";

function Carousel() {
  /*let aver = [
    {
      firsContainer: [
        {
          imageClass: "m-1 img1 imgConfig",
          city: "Tokio",
          country: "Japan",
        },
        {
          imageClass: "m-1 img2 imgConfig",
          city: "New York",
          country: "USA",
        },
        {
          imageClass: "m-1 img3 imgConfig",
          city: "París",
          country: "France",
        },
        {
          imageClass: "m-1 img4 imgConfig",
          city: "Seoul",
          country: "South Korea",
        },
      ],
      secoundContainer: [
        {
          imageClass: "m-1 img5 imgConfig",
          city: "Tokio",
          country: "Japan",
        },
        {
          imageClass: "m-1 img6 imgConfig",
          city: "New York",
          country: "USA",
        },
        {
          imageClass: "m-1 img7 imgConfig",
          city: "París",
          country: "France",
        },
        {
          imageClass: "m-1 img8 imgConfig",
          city: "Seoul",
          country: "South Korea",
        },
      ],
      thirdContainer: [
        {
          imageClass: "m-1 img9 imgConfig",
          city: "Tokio",
          country: "Japan",
        },
        {
          imageClass: "m-1 img10 imgConfig",
          city: "New York",
          country: "USA",
        },
        {
          imageClass: "m-1 img11 imgConfig",
          city: "París",
          country: "France",
        },
        {
          imageClass: "m-1 img12 imgConfig",
          city: "Seoul",
          country: "South Korea",
        },
      ],
    },
  ];*/

  let [img, setImg] = useState(1);
  let handlerBack = () => {
    if (img != 1) {
      setImg(img - 1);
    }
  };
  let handlerUp = () => {
    if (img != 3) {
      setImg(img + 1);
    }
  };
  return (
    <>
      {img == 1 || img == 2 || img == 3 ? (
        <>
          <div className="section justify-content-center col-8">
            <p className="text-center popularTitle">Popular MYTINERARIES!</p>
            {img == 1 && <Map container={FIRST} />}
            {img == 2 && <Map container={SECOND} />}
            {img == 3 && <Map container={THIRD} />}
          </div>
        </>
      ) : (
        <>
          <p>No existe</p>
        </>
      )}
      <div className="botoncito">
        <button className="back" onClick={() => handlerBack()}>
          A
        </button>
        <button className="up" onClick={() => handlerUp()}>
          A
        </button>
      </div>
    </>
  );
}

export default Carousel;
