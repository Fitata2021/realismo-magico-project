import React, { useState, useEffect } from "react";
import "../styles/VisualTest.css";
import ArtistData from "../utils/ArtistData";

const VisualTest = () => {
  const [score, setScore] = useState(0);
  const [artworkFindAuthor, setArtworFindAuthor] = useState(1);
  const [numberQuestionScreen, setNumberQuestionScreen] = useState(1);
  const [toogleInstructions, setToogleInstructions] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(numberQuestionScreen);

  const compare = (id, e) => {
    const targetElement = e.currentTarget;

    if (id === ArtistData[artworkFindAuthor].id) {
      setScore(score + 1);
      targetElement.classList.add("correct");
      setTimeout(() => {
        targetElement.classList.remove("correct");
        setArtworFindAuthor(artworkFindAuthor + 1);
        setNumberQuestionScreen(numberQuestionScreen + 1);
      }, 400);
    } else {
      targetElement.classList.add("incorrect");
      setTimeout(() => {
        targetElement.classList.remove("incorrect");
        setArtworFindAuthor(artworkFindAuthor + 1);
        setNumberQuestionScreen(numberQuestionScreen + 1);
      }, 400);
    }
  };

  const restart = () => {
    setScore(0);
    setArtworFindAuthor(1);
    setNumberQuestionScreen(1);
  };

  return (
    <div>
      <main className="visual-test">
        {numberQuestionScreen === 1 && (
          <>
            <section className="main-image">
              {toogleInstructions ? (
                <button
                  className="instructions-button"
                  onClick={() => setToogleInstructions(false)}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              ) : (
                <article className="info1">
                  <p>INSTRUCCIONES:</p>
                  <p>
                    Este test visual permitirá reconocer el autor correcto de
                    cada obra de arte de acuerdo a sus características
                    estilísticas y su forma de expresar lo real fantástico.
                    Debes seleccionar el autor correcto. Se mostrará en color
                    verde cuando la elección sea correcta o de color rojo si es
                    incorrecta. Al final del test obtendrás tu puntuación.
                  </p>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => setToogleInstructions(true)}
                  ></i>
                </article>
              )}

              <img
                src={ArtistData[artworkFindAuthor].artworks[4]}
                alt=""
                style={
                  toogleInstructions
                    ? { filter: "blur(0px)" }
                    : { filter: "blur(8px)" }
                }
              />
            </section>

            <section
              className="answer-images-options"
              style={
                toogleInstructions
                  ? { filter: "blur(0px)" }
                  : { filter: "blur(8px)" }
              }
            >
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[1].id, e)}
              >
                <img src={ArtistData[1].img} alt="" />
                <p>{ArtistData[1].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[0].id, e)}
              >
                <img src={ArtistData[0].img} alt="" />
                <p>{ArtistData[0].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[3].id, e)}
              >
                <img src={ArtistData[3].img} alt="" />
                <p>{ArtistData[3].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[4].id, e)}
              >
                <img src={ArtistData[4].img} alt="" />
                <p>{ArtistData[4].name}</p>
              </div>
            </section>
          </>
        )}
        {numberQuestionScreen === 2 && (
          <>
            <section className="main-image">
              <img src={ArtistData[artworkFindAuthor].artworks[4]} alt="" />
            </section>
            <section className="answer-images-options">
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[2].id, e)}
              >
                <img src={ArtistData[2].img} alt="" />
                <p>{ArtistData[2].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[8].id, e)}
              >
                <img src={ArtistData[8].img} alt="" />
                <p>{ArtistData[8].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[5].id, e)}
              >
                <img src={ArtistData[5].img} alt="" />
                <p>{ArtistData[5].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[3].id, e)}
              >
                <img src={ArtistData[3].img} alt="" />
                <p>{ArtistData[3].name}</p>
              </div>
            </section>
          </>
        )}
        {numberQuestionScreen === 3 && (
          <>
            <section className="main-image">
              <img src={ArtistData[artworkFindAuthor].artworks[4]} alt="" />
            </section>
            <section className="answer-images-options">
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[5].id, e)}
              >
                <img src={ArtistData[5].img} alt="" />
                <p>{ArtistData[5].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[3].id, e)}
              >
                <img src={ArtistData[3].img} alt="" />
                <p>{ArtistData[3].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[11].id, e)}
              >
                <img src={ArtistData[11].img} alt="" />
                <p>{ArtistData[11].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[1].id, e)}
              >
                <img src={ArtistData[1].img} alt="" />
                <p>{ArtistData[1].name}</p>
              </div>
            </section>
          </>
        )}
        {numberQuestionScreen === 4 && (
          <>
            <section className="main-image">
              <img src={ArtistData[artworkFindAuthor].artworks[4]} alt="" />
            </section>
            <section className="answer-images-options">
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[0].id, e)}
              >
                <img src={ArtistData[0].img} alt="" />
                <p>{ArtistData[0].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[10].id, e)}
              >
                <img src={ArtistData[10].img} alt="" />
                <p>{ArtistData[10].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[7].id, e)}
              >
                <img src={ArtistData[7].img} alt="" />
                <p>{ArtistData[7].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[4].id, e)}
              >
                <img src={ArtistData[4].img} alt="" />
                <p>{ArtistData[4].name}</p>
              </div>
            </section>
          </>
        )}
        {numberQuestionScreen === 5 && (
          <>
            <section className="main-image">
              <img src={ArtistData[artworkFindAuthor].artworks[4]} alt="" />
            </section>
            <section className="answer-images-options">
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[6].id, e)}
              >
                <img src={ArtistData[6].img} alt="" />
                <p>{ArtistData[6].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[5].id, e)}
              >
                <img src={ArtistData[5].img} alt="" />
                <p>{ArtistData[5].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[1].id, e)}
              >
                <img src={ArtistData[1].img} alt="" />
                <p>{ArtistData[1].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[2].id, e)}
              >
                <img src={ArtistData[2].img} alt="" />
                <p>{ArtistData[2].name}</p>
              </div>
            </section>
          </>
        )}
        {numberQuestionScreen === 6 && (
          <>
            <section className="main-image">
              <img src={ArtistData[artworkFindAuthor].artworks[4]} alt="" />
            </section>
            <section className="answer-images-options">
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[4].id, e)}
              >
                <img src={ArtistData[4].img} alt="" />
                <p>{ArtistData[4].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[9].id, e)}
              >
                <img src={ArtistData[9].img} alt="" />
                <p>{ArtistData[9].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[6].id, e)}
              >
                <img src={ArtistData[6].img} alt="" />
                <p>{ArtistData[6].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[8].id, e)}
              >
                <img src={ArtistData[8].img} alt="" />
                <p>{ArtistData[8].name}</p>
              </div>
            </section>
          </>
        )}
        {numberQuestionScreen === 7 && (
          <>
            <section className="main-image">
              <img src={ArtistData[artworkFindAuthor].artworks[4]} alt="" />
            </section>
            <section className="answer-images-options">
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[7].id, e)}
              >
                <img src={ArtistData[7].img} alt="" />
                <p>{ArtistData[7].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[4].id, e)}
              >
                <img src={ArtistData[4].img} alt="" />
                <p>{ArtistData[4].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[10].id, e)}
              >
                <img src={ArtistData[10].img} alt="" />
                <p>{ArtistData[10].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[0].id, e)}
              >
                <img src={ArtistData[0].img} alt="" />
                <p>{ArtistData[0].name}</p>
              </div>
            </section>
          </>
        )}
        {numberQuestionScreen === 8 && (
          <>
            <section className="main-image">
              <img src={ArtistData[artworkFindAuthor].artworks[4]} alt="" />
            </section>
            <section className="answer-images-options">
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[8].id, e)}
              >
                <img src={ArtistData[8].img} alt="" />
                <p>{ArtistData[8].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[11].id, e)}
              >
                <img src={ArtistData[11].img} alt="" />
                <p>{ArtistData[11].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[0].id, e)}
              >
                <img src={ArtistData[0].img} alt="" />
                <p>{ArtistData[0].name}</p>
              </div>
              <div
                className="card-image-option"
                onClick={(e) => compare(ArtistData[3].id, e)}
              >
                <img src={ArtistData[3].img} alt="" />
                <p>{ArtistData[3].name}</p>
              </div>
            </section>
          </>
        )}
        {numberQuestionScreen === 9 && (
          <>
            <section className="finish-section">
              <section className="card-finished">
                {score === 8 && (
                  <p className="game-won">Muy bien, lo Lograste!</p>
                )}
                <div className="game-finished">
                  <span>Has obtenido {score} de 8</span>
                  <div className="btns-container">
                    <button
                      onClick={() =>
                        setNumberQuestionScreen(numberQuestionScreen + 1)
                      }
                    >
                      Ver Respuestas
                    </button>
                    <button onClick={() => restart()}>Salir</button>
                  </div>
                </div>
              </section>
            </section>
          </>
        )}
        {numberQuestionScreen === 10 && (
          <div className="answers">
            <section className="answer-images">
              <div className="card-image-answer">
                <img src={ArtistData[1].artworks[4]} alt="" />
                <p>{ArtistData[1].name}</p>
                <img className="author" src={ArtistData[1].img} alt="" />
              </div>
              <div className="card-image-answer">
                <img src={ArtistData[2].artworks[4]} alt="" />
                <p>{ArtistData[2].name}</p>
                <img className="author" src={ArtistData[2].img} alt="" />
              </div>
              <div className="card-image-answer">
                <img src={ArtistData[3].artworks[4]} alt="" />
                <p>{ArtistData[3].name}</p>
                <img className="author" src={ArtistData[3].img} alt="" />
              </div>
              <div className="card-image-answer">
                <img src={ArtistData[4].artworks[4]} alt="" />
                <p>{ArtistData[4].name}</p>
                <img className="author" src={ArtistData[4].img} alt="" />
              </div>
              <div className="card-image-answer">
                <img src={ArtistData[5].artworks[4]} alt="" />
                <p>{ArtistData[5].name}</p>
                <img className="author" src={ArtistData[5].img} alt="" />
              </div>
              <div className="card-image-answer">
                <img src={ArtistData[6].artworks[4]} alt="" />
                <p>{ArtistData[6].name}</p>
                <img className="author" src={ArtistData[6].img} alt="" />
              </div>
              <div className="card-image-answer">
                <img src={ArtistData[7].artworks[4]} alt="" />
                <p>{ArtistData[7].name}</p>
                <img className="author" src={ArtistData[7].img} alt="" />
              </div>
              <div className="card-image-answer">
                <img src={ArtistData[8].artworks[4]} alt="" />
                <p>{ArtistData[8].name}</p>
                <img className="author" src={ArtistData[8].img} alt="" />
              </div>
            </section>
            <section className="exit">
              <button className="exit-answers" onClick={() => restart()}>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setToogleInstructions(true)}
                ></i>
              </button>
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

export default VisualTest;
