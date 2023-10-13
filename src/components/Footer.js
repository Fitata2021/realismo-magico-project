import React from "react";
import "../styles/Footer.css";
import universityLogo from "../images/santo-tomas-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-logo">
        <img src={universityLogo} alt="" />
      </div>
      <p className="credits-bachelor-degree">LICENCIATURA EN ARTES PLÁSTICAS</p>
      <p className="credits-author-page">WEB - DESIGN BY CRISTIAN FITATA</p>
    </footer>
  );
};

export default Footer;
