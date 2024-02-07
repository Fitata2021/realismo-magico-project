import React from "react";
// import banner from "../images/artists-images/kahlo-banner.jpg";
// import question_images from "../images/test-images/question-test.jpg";
// import FV_test from "../images/test-images/FV-test.jpg";
// import visual_test from "../images/test-images/visual-test.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/Tests.css";
import { useEffect } from "react";

const question_images =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/f1b1239d-008d-4866-0289-88fca5464000/public";
const FV_test =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/b49392d2-362b-48b1-973f-da9afedb4b00/public";
const visual_test =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/9029c6ad-54ae-41bd-5b0b-0f58311b0200/public";

const banner =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/f9cd3f9a-455a-495f-050a-8589d6b6fc00/public";

const Tests = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="main-tests">
      <h1 className="page-title">TESTS</h1>
      <div className="container">
        <img src={banner} alt="" className="banner-tests" />
      </div>
      <section className="description">
        <p>
          En esta sección se encuentran tres tests relacionados con el Realismo
          Mágico, un movimiento artístico fascinante que ha dejado una huella
          significativa en el arte latinoamericano. Estos tests nos permitirán
          evaluar el conocimiento y comprensión sobre este movimiento artístico
          único. ¡Comencemos y descubramos cuánto sabemos sobre el realismo
          mágico!
        </p>

        <h3 className="test-titles">"Contra Reloj"</h3>

        <p>
          El primer test, explora los conceptos del Realismo Mágico junto con
          la vida y obra de los artistas más destacados del Realismo Mágico en
          Latinoamérica. Se te presentan preguntas sobre la biografía de los
          artistas, sus técnicas artísticas y sus obras más reconocidas. De la
          misma manera, sobre el concepto del movimiento artístico y sus
          características. Demuestra cuánto conoces este movimiento y a sus
          talentosos artistas y su contribución al movimiento del Realismo
          Mágico.
        </p>

        <h3 className="test-titles">"Libera Mariposas"</h3>

        <p>
          En el segundo test, continuaremos evaluando tus conocimientos
          adquiridos sobre este maravilloso movimiento en las artes plásticas.
          El objetivo es que respondas el test las veces que lo consideres
          necesario ya que al encontrar las repuestas correctas reforzarás tu
          conocimiento. Prepárate para sumergirte en este mundo enigmático y
          poner a prueba lo que has aprendido.
        </p>

        <h3 className="test-titles">"Descubre al pintor"</h3>

        <p>
          Por último, pero no menos importante, este tercer test, sera un test
          visual que te desafiará a elegir de manera correcta para lograr
          aprobar. Se te presentará una obra del realismo mágico y como opciones
          las imágenes de algunos artistas, tu tarea será seleccionar el artista
          creador de la obra. Prepárate para poner a prueba tu memoria visual y
          establecer las relaciones entre los elementos y estilos propios de
          cada artista que estudiaste y su autor en sus obras.
        </p>

        <p>
          Espero que disfrutes de estos tests y que te permitan profundizar en
          tu comprensión sobre el Realismo Mágico. ¡Buena suerte!
        </p>
      </section>

      <ul className="container-cards-test">
        <li
          className="card-test"
          title="COMENZAR"
          onClick={() => navigate("/questions-test")}
        >
          <h3>Contra Reloj</h3>
          <img src={question_images} alt="" className="card-img" />
        </li>

        <li
          className="card-test"
          title="COMENZAR"
          onClick={() => navigate("/boolean-test")}
        >
          <h3>Libera Mariposas</h3>
          <img src={FV_test} alt="" className="card-img" />
        </li>

        <li
          className="card-test"
          title="COMENZAR"
          onClick={() => navigate("/visual-test")}
        >
          <h3>Descubre al Pintor</h3>
          <img src={visual_test} alt="" className="card-img" />
        </li>
      </ul>
    </div>
  );
};

export default Tests;
