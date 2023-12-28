import { useEffect, useState } from "react";
import "../styles/Puzzle.css";

import { piecesData, infoArtwork } from "../utils/piecesData";

const Puzzle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    }
    if (countClic === 2) {
      let piece2 = index;
      let aux = piecesList[piece1];
      piecesList[piece1] = piecesList[piece2];
      piecesList[piece2] = aux;
      setPieceSelected(index);
      piecesList[index].status = "selected";
      setPiecesList([...piecesList]);
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
      {counterPuzzle === piecesData.length && isFinished ? (
        <p
          className="game-won-final"
          style={
            toogleInstructions
              ? { filter: "blur(0px)" }
              : { filter: "blur(8px)" }
          }
        >
          Felicitaciones! Haz terminado los 3 puzzles
        </p>
      ) : (
        <p
          className="game-won"
          style={{
            display: isFinished ? "inline" : "none",
            filer: toogleInstructions ? "blur(0px)" : "blur(8px)",
          }}
        >
          Muy bien, lo Lograste!
        </p>
      )}
      {toogleInstructions ? (
        <button
          className="instructions-button"
          onClick={() => setToogleInstructions(false)}
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
                SELECCIONA DOS IMAGENES PARA QUE SE INTERCAMBIEN DE LUGAR
              </article>
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
            <div className="exit-icon">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setToogleInstructions(true)}
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
            onClick={() => selectPiece(index)}
          >
            <img src={piece.image} alt="" />
          </div>
        ))}
      </section>
      {isFinished ? (
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
      ) : (
        <div className="no-button"></div>
      )}

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
              Muy bien, lo Lograste!
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
