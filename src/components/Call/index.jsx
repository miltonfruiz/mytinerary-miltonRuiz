import React from "react";
import "./style.css";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Call() {
  return (
    <>
      <div className="call">
        <button href="/Cities" className="btn btn-danger callToAction">
          <p className="hola">
            Click for More Info! <FaAngleDoubleRight size={25} />
          </p>
        </button>
      </div>
    </>
  );
}
