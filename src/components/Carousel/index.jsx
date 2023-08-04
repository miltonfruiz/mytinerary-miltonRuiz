import React, { useState } from "react";

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
      <div>
        {img == 1 || img == 2 || img == 3 ? (
          <>
            {img == 1 && <p>Paso 1</p>}
            {img == 2 && <p>Paso 2</p>}
            {img == 3 && <p>Paso 3</p>}
          </>
        ) : (
          <>
            <p>No existe</p>
          </>
        )}
      </div>
      <button onClick={() => handlerBack()}>Atras</button>
      <button onClick={() => handlerUp()}>Adelante</button>
    </>
  );
}

export default Carousel;
