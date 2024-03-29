import { useEffect, useState } from "react";
import "../styles/Puzzle.css";
import useSound from "use-sound";
import sound1 from "../sounds/water_spray_bottle.mp3";
import sound2 from "../sounds/bicycle_click.mp3";
import finish_sound from "../sounds/fantasy_magic.mp3";

import { piecesData, infoArtwork } from "../utils/piecesData";
import { useNavigate } from "react-router-dom";

const Puzzle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [playSound1] = useSound(sound1);
  const [playSound2] = useSound(sound2);
  const [playFinish] = useSound(finish_sound);
  const [toogleInstructions, setToogleInstructions] = useState(false);
  const [numberPuzzle, setNumberPuzzle] = useState(0);
  const [piecesList, setPiecesList] = useState(
    [...piecesData[numberPuzzle]].sort(() => Math.random() - 0.5),
  );
  const [countClic, setCountClic] = useState(1);
  const [pieceSelected, setPieceSelected] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [theme, setTheme] = useState("hide");
  const [counterPuzzle, setCounterPuzzle] = useState(1);

  let puzzleOrdered = [...piecesData[numberPuzzle]];

  console.log(numberPuzzle);
  console.log(counterPuzzle);
  const unselectPieces = () => {
    for (let i = 0; i < piecesList.length; i++) {
      piecesList[i].status = "unselected";
    }
  };

  const selectPiece = (index) => {
    setCountClic(countClic + 1);
    let piece1 = pieceSelected;

    if (countClic === 1) {
      setPieceSelected(index);
      unselectPieces();
      piecesList[index].status = "selected";
      setPiecesList([...piecesList]);
      playSound1();
    }
    if (countClic === 2) {
      let piece2 = index;
      let aux = piecesList[piece1];
      piecesList[piece1] = piecesList[piece2];
      piecesList[piece2] = aux;
      setPieceSelected(index);
      piecesList[index].status = "selected";
      setPiecesList([...piecesList]);
      playSound2();
      unselectPieces();
      setCountClic(1);
      compare();
    }
  };

  const compare = () => {
    let counter = 0;
    for (let i = 0; i < piecesList.length; i++) {
      if (piecesList[i]?.id === puzzleOrdered[i]?.id) {
        //console.log("es igual");
        counter = counter + 1;
      } else {
        //console.log("no es igual");
      }
    }

    if (counter === piecesData[numberPuzzle].length) {
      setIsFinished(true);
      setTheme("show");
      playFinish();

      if (numberPuzzle < piecesData.length - 1) {
        setNumberPuzzle(numberPuzzle + 1);
      } else {
        setNumberPuzzle(0);
      }
    }
  };

  const reset = (number) => {
    setNumberPuzzle(number);
    setTheme("hide");
    setIsFinished(false);
    setPiecesList([...piecesData[number]].sort(() => Math.random() - 0.5));
    setCountClic(1);
    setPieceSelected(null);
  };

  const replay = () => {
    setTheme("hide");
    setIsFinished(false);
    setPiecesList(
      [...piecesData[numberPuzzle]].sort(() => Math.random() - 0.5),
    );
    setCountClic(1);
    setPieceSelected(null);
  };

  return (
    <main className="puzzle-main">
      <div
        className="back-icon"
        onClick={() => navigate("/games")}
        style={toogleInstructions ? { display: "inline" } : { display: "none" }}
      >
        {" "}
        <i className="fa-solid fa-xmark"></i>
      </div>
      {counterPuzzle === piecesData.length && isFinished && (
        <p
          className="game-won"
          style={{
            filer: toogleInstructions ? "blur(0px)" : "blur(8px)",
          }}
        >
          Muy bien, lo Lograste!
        </p>
      )}
      {toogleInstructions ? (
        <button
          className="instructions-button"
          onClick={() => {
            setToogleInstructions(false);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      ) : (
        <section className="info">
          <h1 className="info-title">OBRA PUZZLE</h1>
          <p>
            Bienvenido a la sección de puzzles! Son tres puzzles que puedes
            armar. En cada uno, lo que debes hacer es descubrir la imagen de una
            increible obra de arte ordenando las piezas de modo que cada pieza
            este en su correpondiente lugar hasta que puedas ver la imagen que
            conforma la obra completa.
            <div className="warning-section">
              <article>
                SELECCIONA DOS PIEZAS PARA QUE SE INTERCAMBIEN DE LUGAR
              </article>
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
            <div className="exit-icon">
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  setToogleInstructions(true);
                }}
              ></i>
            </div>
          </p>
        </section>
      )}
      <section
        className="container-pieces"
        style={
          toogleInstructions ? { filter: "blur(0px)" } : { filter: "blur(8px)" }
        }
      >
        {piecesList.map((piece, index) => (
          <div
            className={`piece ${piece.status}`}
            key={piece.id}
            onClick={!isFinished ? () => selectPiece(index) : null}
          >
            <img src={piece.image} alt="" />
          </div>
        ))}
      </section>
      {
        isFinished && (
          <>
            {counterPuzzle === piecesData.length ? (
              <button
                style={
                  toogleInstructions
                    ? { filter: "blur(0px)" }
                    : { filter: "blur(8px)" }
                }
                className="next"
                onClick={() => [replay(), setCounterPuzzle(1)]}
              >
                <p style={{ fontSize: "14px" }}>Volver al primer Puzzle</p>
                <i className="fa-regular fa-hand-pointer"></i>
              </button>
            ) : (
              <button
                style={
                  toogleInstructions
                    ? { filter: "blur(0px)" }
                    : { filter: "blur(8px)" }
                }
                className="next"
                onClick={() => [replay(), setCounterPuzzle(counterPuzzle + 1)]}
              >
                <p>Siguiente Puzzle</p>
                <i className="fa-regular fa-hand-pointer"></i>
              </button>
            )}

            <button
              style={
                toogleInstructions
                  ? { filter: "blur(0px)" }
                  : { filter: "blur(8px)" }
              }
              onClick={() => [reset(counterPuzzle - 1)]}
              className="reset-button"
            >
              <i className="fa-sharp fa-solid fa-rotate"></i>
            </button>
          </>
        )
        // : (
        //   <div className="no-button"></div>
        // )
      }

      <section
        className="info-artwork"
        style={
          toogleInstructions ? { filter: "blur(0px)" } : { filter: "blur(8px)" }
        }
      >
        <div className={"info-" + theme}>
          {/* {counterPuzzle === piecesData.length && isFinished ? (
            <p
              className="game-won-final"
              style={{ width: "50%", left: "21rem" }}
            >
              Felicitaciones! Haz terminado los 3 puzzles
            </p>
          ) : (
            <p
              className="game-won"
              style={{
                display: isFinished ? "inline" : "none",
              }}
            >
              Muy bien, continua!
            </p>
          )} */}
          <p className="surprise-info">{infoArtwork[counterPuzzle - 1].info}</p>
        </div>
        {isFinished ? (
          <div className="info-artwork-icon-finished">
            <i className="fa-solid fa-arrow-up-long"></i>
          </div>
        ) : (
          <div className="info-artwork-icon-start">
            <i
              className="fa-solid fa-arrow-up-long"
              style={{
                background: "#473c2a",
                color: "#d8cca3",
              }}
            ></i>
          </div>
        )}
        <article className="info-artwork-article">
          ENCONTRARÁS INFORMACIÓN DETALLADA SOBRE LA OBRA AL RESOLVER EL PUZZLE
        </article>
      </section>
    </main>
  );
};

export default Puzzle;
