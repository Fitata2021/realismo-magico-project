import React from "react";
import "../styles/Footer.css";
// import universityLogo from "../images/utils-images/santo-tomas-logo.png";

const universityLogo =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/a3cdf21e-f2bb-4133-fdde-582e680ff400/public";

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
