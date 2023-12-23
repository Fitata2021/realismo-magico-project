import React, { useState } from "react";
import "../styles/BooleanTest.css";
import butterfliesTest from "../utils/ButterfliesTest";
import booleanQuestions from "../utils/BooleanQuestions";
import butterfly from "../images/couple-game-images/picmix.com_1899742.gif";

const BooleanTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [statusGame, setStatusGame] = useState("game");
  //const [statusAnswer, setStatusAnswer] = useState("start");

  function handleAnswer(isCorrect, e) {
    console.log(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
      butterfliesTest[currentQuestion].status = "free";
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
          )}
          <div className="game-finished">
            {score < booleanQuestions.length ? (
              <span>
                Lograste darle vida a {score} de {butterfliesTest.length}{" "}
                mariposas
              </span>
            ) : (
              <span>Lograste darle vida a todas las mariposas</span>
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
                Salir
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
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            ) : (
              <button
                onClick={() => [reset(), setStatusGame("beginning")]}
                className="play-again"
              >
                Volver a Jugar
              </button>
            )}
          </div>
        </section>
      ) : (
        <section className="main-section">
          <h2 className="info-title">FALSO / VERDADERO</h2>
          <p>
            Para poder realizar este test es necesario que hayas abordado todo
            el contenido sobre realismo mágico presentado en esta página. Cada
            vez que aciertes en una pregunta le darás vida a una mariposa mágica
            . Al final del test, obtendrás un puntaje equivalente a la cantidad
            de mariposas que hayas liberado!
            <img
              className={"butterfly-active"}
              style={{ width: "50px", float: "right", margin: "0px" }}
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

          <div className="play-button">
            <div className="border-button">
              <i
                class="fa-solid fa-play"
                onClick={() => setStatusGame("beginning")}
              ></i>
            </div>
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
