import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BooleanTest.css";
import butterfliesTest from "../utils/ButterfliesTest";
import booleanQuestions from "../utils/BooleanQuestions";
import useSound from "use-sound";
import soundIncorrect from "../sounds/game_error_tone.mp3";
import soundCorrect from "../sounds/game_correct_tone.mp3";
import finish_sound from "../sounds/fantasy_magic.mp3";
import sound1 from "../sounds/water_spray_bottle.mp3";
// import butterfly from "../images/utils-images/picmix.com_1899742.gif";

const butterfly =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/a41b14be-44d1-4054-dadb-b17b3f402d00/public";

const BooleanTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [statusGame, setStatusGame] = useState("game");
  const [playSoundIncorrect] = useSound(soundIncorrect);
  const [playSoundCorrect] = useSound(soundCorrect);
  const [playFinish] = useSound(finish_sound);
  const [playSound1] = useSound(sound1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleAnswer(isCorrect, e) {
    console.log(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
      playSoundCorrect();
      butterfliesTest[currentQuestion].status = "free";
    } else {
      playSoundIncorrect();
    }
    e.target.classList.add(isCorrect ? "good" : "bad");

    setTimeout(() => {
      e.target.classList.remove("good", "bad");
    }, 300);
    setTimeout(() => {
      if (currentQuestion === booleanQuestions.length - 1) {
        setStatusGame("finished");
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 100);
  }

  const reset = () => {
    for (let i = 0; i < butterfliesTest.length; i++) {
      butterfliesTest[i].status = "jail";
    }
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <main className="butterflies-game">
      <div className="close-icon" onClick={() => navigate("/tests")}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      {statusGame === "beginning" ? (
        <section className="card-quiz">
          <div className="left">
            <div className="question-number">
              <span>Pregunta {currentQuestion + 1} </span>de{" "}
              {booleanQuestions.length}
            </div>
            <div className="question-title">
              {booleanQuestions[currentQuestion].title}
            </div>
          </div>
          <div className="right">
            {booleanQuestions[currentQuestion].options.map((answer) => (
              <button
                key={answer.answerText}
                onClick={(e) => handleAnswer(answer.isCorrect, e)}
              >
                {answer.answerText}
              </button>
            ))}
          </div>
        </section>
      ) : statusGame === "finished" ? (
        <section className="card-finished">
          {score === booleanQuestions.length && (
              <p className="game-won">Muy bien, lo Lograste!</p>
            ) &&
            playFinish()}
          <div className="game-finished">
            {score < booleanQuestions.length ? (
              <span>
                Lograste darle vida a {score} de {butterfliesTest.length}{" "}
                mariposas
              </span>
            ) : (
              <>
                <p className="game-won">Muy bien, lo Lograste!</p>
                <span>Liberaste a todas las mariposas!</span>
              </>
            )}

            <div className="btns-container">
              <button onClick={() => [reset(), setStatusGame("beginning")]}>
                Volver a Jugar
              </button>
              <button
                onClick={() => [
                  setStatusGame("card-shown-answers"),
                  setCurrentQuestion(0),
                ]}
              >
                Ver Respuestas
              </button>
              <button onClick={() => [reset(), setStatusGame("game")]}>
                Instrucciones
              </button>
            </div>
          </div>
        </section>
      ) : statusGame === "card-shown-answers" ? (
        <section className="card-shown-answers">
          <div className="left">
            <div className="question-number">
              <span>Pregunta {currentQuestion + 1} </span>de{" "}
              {booleanQuestions.length}
            </div>
            <div className="question-title">
              {booleanQuestions[currentQuestion].title}
            </div>
          </div>
          <div className="answers-right">
            <div className="answer">
              {
                booleanQuestions[currentQuestion].options.filter(
                  (answer) => answer.isCorrect,
                )[0].answerText
              }
            </div>
            {currentQuestion < booleanQuestions.length - 1 ? (
              <button
                onClick={() =>
                  currentQuestion < booleanQuestions.length - 1
                    ? setCurrentQuestion(currentQuestion + 1)
                    : [reset(), setStatusGame("game")]
                }
              >
                <i
                  className="fa-solid fa-chevron-right"
                  onClick={playSound1()}
                ></i>
              </button>
            ) : (
              <button
                onClick={() => [setStatusGame("finished", playSound1())]}
                className="play-again"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </section>
      ) : (
        <section className="main-section">
          <h2 className="info-title">LIBERA MARIPOSAS!</h2>
          <p>
            Debes seleccionar falso o verdadero según cada pregunta. Cada vez
            que aciertes, le darás vida a una mariposa mágica . Al final del
            test, obtendrás un puntaje equivalente a la cantidad de mariposas
            que hayas liberado!
            <img
              className={"butterfly-active"}
              style={{ width: "30px", float: "right", margin: "0px" }}
              src={butterfly}
              alt=""
            />
          </p>
          <p>
            UNA VEZ SELECCIONES LA RESPUESTA, SE MARCARÁ DE COLOR VERDE SI ES
            CORRECTA{" "}
            <div className="rigth-icon">
              <i className="fa-solid fa-check"></i>
            </div>{" "}
            Ó SE MARCARÁ DE COLOR ROJO SI ES INCORRECTA{" "}
            <div className="wrong-icon">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </p>
          <div className="exit-icon">
            <i
              className="fa-solid fa-xmark"
              onClick={() => [reset(), setStatusGame("beginning")]}
            ></i>
          </div>
        </section>
      )}
      {statusGame !== "game" && (
        <section className="butterfly_board">
          {butterfliesTest.map((piece, index) => (
            <div className={`piece ${piece.status}`} key={piece.id}>
              {piece.status === "jail" ? (
                <img className="butterfly-inactive" src={piece.img} alt="" />
              ) : (
                <img className="butterfly-active" src={butterfly} alt="" />
              )}
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default BooleanTest;
