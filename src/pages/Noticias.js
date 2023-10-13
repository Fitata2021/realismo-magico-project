import React from "react";
import banner from "../images/artists-images/rivera-banner.jpg";
import "../styles/Noticias.css";
import { useEffect } from "react";
import leonoraSculpture1 from "../images/news-images/leonora-sculpture1.jpg";
import leonoraSculpture2 from "../images/news-images/leonora-sculpture2.jpg";
import rostrosMacondo from "../images/news-images/macondo.jpg";

const Noticias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="page-title">NOTICIAS</h1>
      <div className="container">
        <img src={banner} alt="" className="banner-noticias" />
      </div>
      <section className="description">
        <h2 className="description-title">
          OBRA DONADA POR LEONORA CARRINGTON A LA CIUDAD DE MÉXICO
        </h2>
        <div className="container-news">
          <p>
            La pintora y escritora vivió una breve temporada en Mixcoac, donde
            tomaba el tranvía para poder visitar el Centro Histórico y el Zócalo
            capitalino. Del pueblo de Mixcoac al Zócalo, el viaje en tranvía
            duraba 45 minutos. Muy cerca del Zócalo se encuentra la
            banca-escultura “Ya no hay lugar”, de Leonora Carrington -a espaldas
            de la Catedral, en la calle de Guatemala-, que forma parte del
            proyecto Diálogo de bancas.
          </p>
          <img className="images-news" src={leonoraSculpture1} alt="" />
        </div>
        <br />
        <h2 className="description-title">
          UNA OBRA DE LEONORA CARRINGTON SE UBICARÁ DE MANERA PERMANENTE EN EL
          JARDÍN DEL ANTIGUO PALACIO DEL ARZOBISPADO EN MEXICO
        </h2>
        <div className="container-news">
          <img className="images-news" src={leonoraSculpture2} alt="" />
          <p>
            Donada por su hijo Pablo Weisz, la pieza de bronce (260 x 125x 82)
            quedará de manera permanente en este espacio “para evocar la esencia
            y la presencia de la artista”. Actuamente este museo cuenta con 8
            esculturas en total de la artista.
          </p>

          <br />
        </div>
        <h2 className="description-title">
          LABORATORIO DE CREACIÓN EDITORIAL: UN FANZINE CON REALISMO MÁGICO
        </h2>
        <div className="container-news">
          <p>
            Lugar: (espacio Maker, Centro Cultura Comfandi) Call 8 # 6 23 Barrio
            Santa Rosa Público Objetivo: Jóvenes, adultos y adultos mayores.
            Tipo de evento: Modalidad: Presencial Fecha de inicio: Sáb,
            07/10/2023 - 14:00 Fecha de finalización: Sáb, 07/10/2023 - 16:00
            Iniciaremos el laboratorio con un recorrido por la exposición
            fotográfica Rostros Macondianos, Cultura y Literatura. De esta
            manera, las y los asistentes se acercan en primera instancia a una
            parte de ese realismo mágico propuesta por Gabriel García Márquez.
            Después de dicho recorrido, iniciaremos la construcción de un
            Fanzine inspirado en la expresión literaria: Realismo Mágico,
            utilizada por nuestro nobel colombiano en sus obras. Al finalizar,
            cada asistente habrá elaborado con sus propias manos una publicación
            artesanal que les invitará a relatar su propia visión del realismo
            mágico en Cali. Con este laboratorio vamos a explorar y proponer
            desde la escritura, collage y dibujo el realismo mágico de Cali
          </p>
          <img className="images-news" src={rostrosMacondo} alt="" />
        </div>
        <br />
      </section>
    </div>
  );
};

export default Noticias;
