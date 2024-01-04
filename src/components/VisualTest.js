import React, { useState, useEffect } from "react";
import "../styles/VisualTest.css";
import ArtistData from "../utils/ArtistData";
import useSound from "use-sound";
import soundIncorrect from "../sounds/game_error_tone.mp3";
import soundCorrect from "../sounds/game_correct_tone.mp3";
import finish_sound from "../sounds/fantasy_magic.mp3";

const VisualTest = () => {
  const [score, setScore] = useState(0);
  const [artworkFindAuthor, setArtworFindAuthor] = useState(1);
  const [numberQuestionScreen, setNumberQuestionScreen] = useState(1);
  const [toogleInstructions, setToogleInstructions] = useState(false);
  const [playSoundIncorrect] = useSound(soundIncorrect);
  const [playSoundCorrect] = useSound(soundCorrect);
  const [playFinish] = useSound(finish_sound);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(numberQuestionScreen);

  const compare = (id, e) => {
    const targetElement = e.currentTarget;

    if (id === ArtistData[artworkFindAuthor].id) {
      setScore(score + 1);
      targetElement.classList.add("correct");
      playSoundCorrect();
      setTimeout(() => {
        targetElement.classList.remove("correct");
        setArtworFindAuthor(artworkFindAuthor + 1);
        setNumberQuestionScreen(numberQuestionScreen + 1);
      }, 400);
    } else {
      targetElement.classList.add("incorrect");
      playSoundIncorrect();
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
    setToogleInstructions(false);
  };

  return (
    <div>
      <main className="visual-test">
        {numberQuestionScreen === 1 && (
          <div className="container-question">
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
                  <h2 className="info-title">DESCUBRE AL PINTOR!</h2>
                  <p>
                    Este test visual permitirá reconocer el autor correcto de
                    cada obra de arte de acuerdo a sus características
                    estilísticas y su forma de expresar lo real fantástico.
                    Debes seleccionar el autor correcto. Se mostrará en color
                    verde cuando la elección sea correcta
                    <div className="rigth-icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    o de color rojo si es incorrecta.
                    <div className="wrong-icon">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    Al final del test obtendrás tu puntuación.
                    <div className="exit-icon">
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => setToogleInstructions(true)}
                      ></i>
                    </div>
                    <br />
                  </p>
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
          </div>
        )}
        {numberQuestionScreen === 2 && (
          <div className="container-question">
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
          </div>
        )}
        {numberQuestionScreen === 3 && (
          <div className="container-question">
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
          </div>
        )}
        {numberQuestionScreen === 4 && (
          <div className="container-question">
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
          </div>
        )}
        {numberQuestionScreen === 5 && (
          <div className="container-question">
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
          </div>
        )}
        {numberQuestionScreen === 6 && (
          <div className="container-question">
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
          </div>
        )}
        {numberQuestionScreen === 7 && (
          <div className="container-question">
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
          </div>
        )}
        {numberQuestionScreen === 8 && (
          <div className="container-question">
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
          </div>
        )}
        {numberQuestionScreen === 9 && (
          <>
            <section className="finish-section">
              <section className="card-finished">
                {score === 8 && (
                    <p className="game-won">Muy bien, lo Lograste!</p>
                  ) &&
                  playFinish()}
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
                <i className="fa-solid fa-xmark"></i>
              </button>
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

export default VisualTest;
