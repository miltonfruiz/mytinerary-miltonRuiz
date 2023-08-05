import React from "react";

export default function Urls({
  row,
  imgContainer,
  textContainer,
  mainTitle,
  subTitle,
  mainName,
  subName,
}) {
  return (
    <>
      <div className={row}>
        <div className={imgContainer}>
          <div className={textContainer}>
            <p className={mainTitle}>{mainName}</p>
            <p className={subTitle}>{subName}</p>
          </div>
        </div>
      </div>
    </>
  );
}
