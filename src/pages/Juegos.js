import React from "react";
import banner from "../images/artists-images/gomez-banner.jpg";
import couples_game from "../images/couple-game-images/couples_game.jpg";
import PuzzleGame from "../images/couple-game-images/PuzzleGame.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/Juegos.css";
import { useEffect } from "react";

const Juegos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="page-title">JUEGOS</h1>
      {/* <CouplesGame /> */}
      <div className="container">
        <img src={banner} alt="" className="banner-juegos" />
      </div>
      <section className="description">
        <p>
          El realismo mágico es una corriente artística fascinante que ha dejado
          una huella significativa en la historia del arte en nuestra región. A
          través de estos juegos, podremos sumergirnos en este mundo enigmático
          y explorar las características y artistas emblemáticos de este
          movimiento. Sin más preámbulos, ¡comencemos!
        </p>

        <h3 className="game-titles">"Obras Gemelas"</h3>

        <p>
          El primer juego que les presento se llama "Descubre al Artista". En
          este juego, tendrán la oportunidad de conocer a los artistas plásticos
          más destacados del realismo mágico en Latinoamérica. Se les
          presentarán obras icónicas y pistas sobre el artista, y su objetivo
          será adivinar de quién se trata. Podrán aprender sobre la vida y obra
          de artistas como Frida Kahlo, Remedios Varo, Alejandro Colunga y otros
          talentos que han dejado una marca indeleble en el movimiento del
          realismo mágico.
        </p>

        <h3 className="game-titles">"Componiendo lo fantástico"</h3>

        <p>
          El segundo juego que les traigo se llama "Crea tu Realidad Mágica". En
          este juego, los participantes tendrán la oportunidad de poner en
          práctica su creatividad y habilidades artísticas. Les proporcionaré
          una serie de elementos y características propias del realismo mágico,
          como objetos flotantes, paisajes oníricos y seres fantásticos, y su
          desafío será crear una obra de arte inspirada en este movimiento.
          Podrán utilizar diferentes técnicas y materiales para plasmar su
          visión personal de la realidad mágica.
        </p>

        <h3 className="game-titles">"Creando una obra magica"</h3>

        <p>
          Por último, pero no menos importante, les presento el juego "Descifra
          el Simbolismo". El realismo mágico se caracteriza por su simbolismo y
          metáforas en las obras de arte. En este juego, se les presentarán una
          serie de obras emblemáticas del realismo mágico y su objetivo será
          descifrar los significados ocultos detrás de los elementos presentes
          en cada una. Podrán explorar los temas recurrentes en este movimiento,
          como el tiempo, la dualidad y los sueños, y analizar cómo los artistas
          plásticos los representan de manera simbólica.
        </p>

        <p>
          Estos tres juegos didácticos les brindarán una experiencia interactiva
          y divertida para sumergirse en el fascinante mundo del realismo mágico
          en Latinoamérica. A través de la exploración de obras de arte, la
          creación de su propia realidad mágica y el análisis del simbolismo
          presente en las obras, podrán comprender mejor las características y
          significados detrás de este movimiento artístico. Los invito a
          disfrutar y aprender de estas
        </p>
      </section>
      <ul className="container-cards-game">
        <li onClick={() => navigate("/couples-game")} className="card-game">
          <img src={couples_game} alt="" />
        </li>
        <li onClick={() => navigate("/puzzle")} className="card-game">
          <img src={PuzzleGame} alt="" />
        </li>
        <li onClick={() => navigate("/canvas")} className="card-game"></li>
      </ul>
    </div>
  );
};

export default Juegos;
