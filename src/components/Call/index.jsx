import React from "react";
import "./style.css";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Call() {
  return (
    <>
      <div className="call">
        <a href="./cities" className="btn btn-danger callToAction">
          <p className="click">
            Click for More Info! <FaAngleDoubleRight size={25} />
          </p>
        </a>
      </div>
    </>
  );
}
