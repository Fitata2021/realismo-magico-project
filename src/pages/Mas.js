import React from "react";
// import banner from "../images/artists-images/pallares-banner.jpg";
import "../styles/Mas.css";
import { useEffect } from "react";

const banner =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/1af986f3-8eac-4053-c4ac-89bc3107d500/public";

const Mas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function deleteContent() {
    var textarea = document.getElementById("textArea");
    textarea.value = "";
  }

  return (
    <div className="main-more">
      <h1 className="page-title">"QUOTES"</h1>
      <div className="container">
        <img src={banner} alt="" className="banner-mas" />
      </div>
      <section className="description">
        <h2 className="quotes">
          "La realidad puede ser retocada por el ojo mágico del realismo
          mágico."
        </h2>
        <p className="author-subtitle">Luis Sepúlveda</p>
        <h2 className="quotes">
          "Estamos en una región intermedia, entre el sueño y la vigilia, donde
          se funden realidad y fantasía."
        </h2>
        <p className="author-subtitle">Isabel Allende</p>
        <h2 className="quotes">
          "Ella sabía distinguir la fantasía de la realidad y, en su mundo de
          ilusiones, nada había que la pudiera dañar."
        </h2>
        <p className="author-subtitle">Laura Esquivel</p>
        <h2 className="quotes">
          "Los sueños tienen la capacidad de transformar la realidad."
        </h2>
        <p className="author-subtitle">Frida Kahlo</p>
        <h2 className="quotes">
          "Lo real maravilloso no es un surrealismo, no es una supresión de lo
          real; es la exaltación plena de lo real."
        </h2>
        <p className="author-subtitle">Alejo Carpentier</p>
        <h2 className="quotes">
          "El realismo mágico es una revuelta contra lo que está aceptado como
          real."
        </h2>
        <p className="author-subtitle">Gabriel García Márquez</p>
        <h2 className="quotes">
          "La realidad no siempre es probable, o probablemente real"
        </h2>
        <p className="author-subtitle">Jorge Luis Borges</p>
        <h2 className="quotes">
          "La imaginación es la única arma en la guerra contra la realidad."
        </h2>
        <p className="author-subtitle">Lewis Carroll</p>
        <h2 className="quotes">
          "La verdadera realidad es más real cuando soñamos."
        </h2>
        <p className="author-subtitle">Tom Spanbauer</p>
        <h2 className="quotes">
          "El arte mágico es la visualización y el perfeccionamiento de la
          realidad, no su negación o su desprecio"
        </h2>
        <p className="author-subtitle">Franz Roh</p>
        <h2 className="quotes">
          "La vida es un sueño, y los sueños, sueños son."
        </h2>
        <p className="author-subtitle">Pedro Calderón de la Barca</p>

        <section className="comments">
          <div className="questions-comments">
            <h2>
              Reflexiona de acuerdo a las siguientes preguntas, escribe en la
              caja de texto y envianos tu comentario:
            </h2>
            <p>¿Que sentiste al ver las obras?</p>
            <p>¿Cual fue la obra que más te llamo la atención y porque?</p>
            <p>
              ¿Si pudieras pintar una obra de realismo magico que pintarias?
            </p>
          </div>
          <textarea
            className="comments-box"
            name=""
            id="textArea"
            cols="30"
            rows="10"
          ></textarea>
          <button className="comments-button" onClick={() => deleteContent()}>
            <b>Enviar</b>
          </button>
        </section>

        <h2 className="description-referentes">Referentes</h2>
        <p className="bibliografias">
          http://www.leonoracarrington.com.mx/index.html
        </p>
        <p className="bibliografias">
          https://es.wikidat.com/info/isabel-viviani
        </p>
        <p className="bibliografias">
          https://galeria13.cl/portfolio/mario-gomez/#:~:text=Estudi%C3%B3%20Licenciatura%20en%20Artes%20con,en%20esencia%20forma%20y%20color
        </p>
        <p className="bibliografias">
          https://lsgaleria.com/pages/biografia-arturo-rivera
        </p>
        <p className="bibliografias">
          https://www.mexicodesconocido.com.mx/leonora-carrington-biografia-obras-y-pintura.html
        </p>
        <p className="bibliografias">
          https://datos.bne.es/persona/XX1119271.html
        </p>
      </section>
    </div>
  );
};

export default Mas;
