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
          El Realismo Mágico permite crear mundos nuevos y maravillosos donde
          los más irreales sueños se plasman en la realidad a través del arte.
          Por medio de estos juegos, podremos sumergirnos en este mundo
          enigmático y explorar obras plásticas, características particulares y
          artistas emblemáticos de este movimiento. ¡Es hora de aprender
          jugando!
        </p>

        <h3 className="game-titles">"Obras Gemelas"</h3>

        <p>
          En este juego, tendrás la oportunidad de descubrir diferentes
          fragmentos de obras de los artistas plásticos más destacados del
          Realismo Mágico en Latinoamérica. Con esta dinámica reconocerás sus
          estilos, sus formas de representación y las particularidades de sus
          elementos. Tendrás la posibilidad de tener información técnica de sus
          obras lo que enriquecerá tu aprendizaje en trabajos artísticos que
          siguen dando vida y dejando una marca indeleble en el movimiento del
          Realismo Mágico.
        </p>

        <h3 className="game-titles">Puzzle"</h3>

        <p>
          En este segundo juego, donde seguirás apreciando composiciones de este
          movimiento que presentan todas las características del Realismo
          Mágico. Será un ejercicio significativo en donde se proporciona el
          material visual que presenta una serie de elementos y características
          propias del Realismo Mágico con el fin de que encuentres por ti mismo
          en la contemplación, la esencia de este movimiento que se comprende
          más en un proceso de observación que de alguna otra manera.
        </p>
        <h3 className="game-titles">"Crea tu obra"</h3>

        <p>
          En este juego, se presentarán una serie de figuras que servirán para
          componer una obra del Realismo Mágico. Tu objetivo, será componer tu
          propia obra haciendo uso de estos elementos junto con los distintos
          escenarios sugeridos. Usa tu imaginación y creatividad de la misma
          manera que lo podrían hacer los artistas plásticos cuando componen sus
          obras de Realismo Mágico.
        </p>

        <p>
          Estos tres juegos didácticos brindarán una experiencia interactiva y
          divertida para sumergirse en el fascinante mundo del Realismo Mágico
          en Latinoamérica. A través de la exploración de obras de arte, la
          creación de tu propia realidad mágica y el análisis del simbolismo
          presente en las obras, podrás comprender mejor las características y
          significados detrás de este movimiento artístico. ¡Te invito a
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
