import React from "react";
import "./style.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="row justify-content-center d-flex align-items-center mt-5">
      <div className="contact col-4">
        <FaInstagram size={30} />
        <FaFacebook size={30} />
        <FaWhatsapp size={30} />
      </div>
      <div className="apMern col-4">
        <p className="mt-3">AP MERN 06 TT</p>
      </div>
      <div className="allRights col-8 justify-content-center d-flex align-items-center mt-5">
        <p className="mt-3">&copy; 2023 - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
