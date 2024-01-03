import React from "react";
// import banner from "../images/artists-images/gomez-banner.jpg";
// import couples_game from "../images/game-images/couples_game.jpg";
// import PuzzleGame from "../images/game-images/PuzzleGame.jpg";
// import canvasGame from "../images/game-images/canvas_game.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/Juegos.css";
import { useEffect } from "react";

const couples_game =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/e0945f7e-1c4c-4eb7-33da-2a2ac47e6100/public";
const PuzzleGame =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/d1a1f4e6-095d-4063-0c33-c81c663f7300/public";
const canvasGame =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/32145846-f850-4233-7e4e-bab6f7b2db00/public";

const banner =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/b9b1a378-0f7f-4d84-0a01-73b3be1e4800/public";

const Juegos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="main-games">
      <h1 className="page-title">JUEGOS</h1>
      {/* <CouplesGame /> */}
      <div className="container">
        <img src={banner} alt="" className="banner-games" />
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

        <h3 className="game-titles">"Crea tu obra"</h3>

        <p>
          Por último, pero no menos importante, se presenta el juego "Crea tu
          obra". El realismo mágico se caracteriza por su simbolismo y metáforas
          en las obras de arte. En este juego, se les presentarán una serie de
          figuras que serviran para componer una obra del realismo mágico, tu
          objetivo será componer tu propia obra usando estos elementos junto con
          los distintos escenarios sugeridos. Usa tu imaginación y creatividad
          de la misma manera que lo podrían hacer los artistas plásticos cuando
          componen sus obras de realismo magico.
        </p>

        <p>
          Estos tres juegos didácticos brindarán una experiencia interactiva y
          divertida para sumergirse en el fascinante mundo del realismo mágico
          en Latinoamérica. A través de la exploración de obras de arte, la
          creación de tu propia realidad mágica y el análisis del simbolismo
          presente en las obras, podras comprender mejor las características y
          significados detrás de este movimiento artístico. Te invito a
          disfrutar y aprender!
        </p>
      </section>

      <ul className="container-cards-game">
        <li
          className="card-game"
          title="JUGAR"
          onClick={() => navigate("/couples-game")}
        >
          <h3>Obras Gemelas</h3>
          <img src={couples_game} alt="" className="game-img" />
        </li>
        <li
          onClick={() => navigate("/puzzle")}
          className="card-game"
          title="JUGAR"
        >
          <h3>Puzzle</h3>
          <img src={PuzzleGame} alt="" className="game-img" />
        </li>
        <li
          onClick={() => navigate("/canvas")}
          className="card-game"
          title="JUGAR"
        >
          <h3>Crea tu Obra</h3>
          <img src={canvasGame} alt="" className="game-img" />
        </li>
      </ul>
    </div>
  );
};

export default Juegos;
