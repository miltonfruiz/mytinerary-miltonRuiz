import React, { useState } from "react";
import "./style.css";
import { IMAGES } from "../../variables/const";
import Map from "../Map";

function Carousel() {
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
            {img == 1 && <Map container={IMAGES[0].firsContainer} />}
            {img == 2 && <Map container={IMAGES[0].secoundContainer} />}
            {img == 3 && <Map container={IMAGES[0].thirdContainer} />}
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
