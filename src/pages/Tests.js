import React from "react";
import banner from "../images/artists-images/kahlo-banner.jpg";
import question_images from "../images/test-images/question-test.jpg";
import FV_test from "../images/test-images/FV-test.jpg";
import visual_test from "../images/test-images/visual-test.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/Tests.css";
import { useEffect } from "react";
const Tests = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="page-title">TESTS</h1>
      <div className="container">
        <img src={banner} alt="" className="banner-tests" />
      </div>
      <section className="description">
        <p>
          {" "}
          tres tests relacionados con el realismo mágico, un movimiento
          artístico fascinante que ha dejado una huella significativa en el arte
          latinoamericano. Estos tests nos permitirán evaluar nuestro
          conocimiento y comprensión sobre este movimiento artístico único.
          ¡Comencemos y descubramos cuánto sabemos sobre el realismo mágico!
        </p>

        <h3 className="test-titles">"Selecciona la opción correcta"</h3>

        <p>
          El primer test, llamado "Identifica las Obras", pondrá a prueba tu
          capacidad para reconocer las obras más emblemáticas del realismo
          mágico. Se te mostrarán imágenes de diferentes pinturas y tu objetivo
          será identificar al artista y la obra correspondiente. Prepárate para
          sumergirte en este mundo enigmático y poner a prueba tu conocimiento.
        </p>

        <h3 className="test-titles">"Conoce a los Artistas"</h3>

        <p>
          En el segundo test, llamado "Conoce a los Artistas", exploraremos la
          vida y obra de los artistas más destacados del realismo mágico en
          Latinoamérica. Se te presentarán preguntas sobre su biografía, sus
          influencias artísticas y sus obras más reconocidas. Demuestra cuánto
          conoces a estos talentosos artistas y su contribución al movimiento
          del realismo mágico.
        </p>

        <h3 className="test-titles">"Interpreta el Simbolismo"</h3>

        <p>
          Por último, pero no menos importante, el tercer test, "Interpreta el
          Simbolismo", te desafiará a analizar el simbolismo presente en las
          obras del realismo mágico. Se te presentarán diferentes elementos y tu
          tarea será descifrar su significado y su relación con los temas
          recurrentes en este movimiento, como el tiempo, los sueños y la
          dualidad. Prepárate para explorar las metáforas y la profundidad
          simbólica del realismo mágico.
        </p>

        <p>
          Espero que disfrutes de estos tests y que te permitan profundizar en
          tu comprensión sobre el realismo mágico. ¡Buena suerte!
        </p>
      </section>
      <ul className="container-cards-test">
        <li className="card-test" onClick={() => navigate("/questions-test")}>
          <img src={question_images} alt="" />
        </li>
        <li className="card-test" onClick={() => navigate("/boolean-test")}>
          <img src={FV_test} alt="" />
        </li>
        <li className="card-test" onClick={() => navigate("/visual-test")}>
          <img src={visual_test} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Tests;
