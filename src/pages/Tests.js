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
    <div className="main-tests">
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

        <h3 className="test-titles">"Descubre el pintor"</h3>

        <p>
          Por último, pero no menos importante, el tercer test, "Descubre el
          pintor", sera un test visual que te desafiará a elegir de manera
          correcta para lograr aprobar. Se te presentará una obra del realismo
          magico y como opciones las imágenes de algunos artistas, tu tarea será
          seleccionar el artista creador de la obra. Prepárate para poner a
          prueba tu memoria visual y establecer las relaciones entre los
          elementos y estilos propios de cada artista que estudiaste y su autor.
        </p>

        <p>
          Espero que disfrutes de estos tests y que te permitan profundizar en
          tu comprensión sobre el realismo mágico. ¡Buena suerte!
        </p>
      </section>

      <ul className="container-cards-test">
        <li
          className="card-test"
          title="COMENZAR"
          onClick={() => navigate("/questions-test")}
        >
          <h3>Responde a Tiempo</h3>
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
          <h3>Crea tu obra</h3>
          <img src={visual_test} alt="" className="card-img" />
        </li>
      </ul>
    </div>
  );
};

export default Tests;
