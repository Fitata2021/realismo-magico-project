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
        <p>https://es.wikidat.com/info/isabel-viviani</p>
        <p>
          https://galeria13.cl/portfolio/mario-gomez/#:~:text=Estudi%C3%B3%20Licenciatura%20en%20Artes%20con,en%20esencia%20forma%20y%20color.
        </p>
        <p>https://lsgaleria.com/pages/biografia-arturo-rivera</p>
        <p>
          https://www.mexicodesconocido.com.mx/leonora-carrington-biografia-obras-y-pintura.html
        </p>
        <p>https://datos.bne.es/persona/XX1119271.html</p>
      </section>
    </div>
  );
};

export default Mas;
