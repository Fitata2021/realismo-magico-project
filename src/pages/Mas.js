import React from "react";
import banner from "../images/artists-images/pallares-banner.jpg";
import "../styles/Mas.css";
import { useEffect } from "react";

const Mas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="page-title">"QUOTES"</h1>
      <div className="container">
        <img src={banner} alt="" className="banner-mas" />
      </div>
      <section className="description">
        <h2 className="description-title">Referentes</h2>
        <p>http://www.leonoracarrington.com.mx/index.html</p>
      </section>
    </div>
  );
};

export default Mas;
