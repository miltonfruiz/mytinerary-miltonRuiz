import React, { useState } from "react";
import Urls from "../Urls";

function Carousel() {
  let firsContainer = [
    {
      numberImage: "m-1 img1",
      city: "Tokio",
      country: "Japan",
    },
    {
      numberImage: "m-1 img2",
      city: "New York",
      country: "USA",
    },
    {
      numberImage: "m-1 img3",
      city: "París",
      country: "France",
    },
    {
      numberImage: "m-1 img4",
      city: "Seoul",
      country: "South Korea",
    },
  ];
  let secoundContainer = [
    {
      numberImage: "m-1 img5",
      city: "Tokio",
      country: "Japan",
    },
    {
      numberImage: "m-1 img6",
      city: "New York",
      country: "USA",
    },
    {
      numberImage: "m-1 img7",
      city: "París",
      country: "France",
    },
    {
      numberImage: "m-1 img8",
      city: "Seoul",
      country: "South Korea",
    },
  ];
  let thirdContainer = [
    {
      numberImage: "m-1 img9",
      city: "Tokio",
      country: "Japan",
    },
    {
      numberImage: "m-1 img10",
      city: "New York",
      country: "USA",
    },
    {
      numberImage: "m-1 img11",
      city: "París",
      country: "France",
    },
    {
      numberImage: "m-1 img12",
      city: "Seoul",
      country: "South Korea",
    },
  ];
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
            {img == 1 && (
              <div className="d-flex justify-content-center">
                {firsContainer.map((each, key) => (
                  <Urls
                    key={key}
                    numberImage={each.numberImage}
                    city={each.city}
                    country={each.country}
                  />
                ))}
              </div>
            )}
            {img == 2 && (
              <div className="d-flex justify-content-center">
                {secoundContainer.map((each, key) => (
                  <Urls
                    key={key}
                    numberImage={each.numberImage}
                    city={each.city}
                    country={each.country}
                  />
                ))}
              </div>
            )}
            {img == 3 && (
              <div className="d-flex justify-content-center">
                {thirdContainer.map((each, key) => (
                  <Urls
                    key={key}
                    numberImage={each.numberImage}
                    city={each.city}
                    country={each.country}
                  />
                ))}
              </div>
            )}
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
