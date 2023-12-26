import React, { useEffect, useState } from "react";
import questions from "../utils/Question";
import "../styles/QuestionsTest.css";

const QuestionsTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStatus, setQuizStatus] = useState("beginning");
  const [missingTime, setMissingTime] = useState(15);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleAnswer(isCorrect, e) {
    setMissingTime(15);
    //Handling score...

    if (isCorrect) setScore(score + 1);
    //Handling styles...
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    //Handling number question position...
    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setQuizStatus("finished");
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 300);
  }
  function resetQuiz(status) {
    setCurrentQuestion(0);
    setScore(0);
    setQuizStatus(status);
    setMissingTime(15);
  }
  useEffect(() => {
    if (quizStatus !== "beginning" && quizStatus !== "shown_answers") {
      const interval = setInterval(() => {
        if (missingTime > 0) {
          setMissingTime((prev) => prev - 1);
        } else {
          setCurrentQuestion(currentQuestion + 1);
          if (currentQuestion === questions.length - 1) {
            setQuizStatus("finished");
          } else {
            setMissingTime(15);
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [missingTime, currentQuestion, quizStatus]);

  if (quizStatus === "beginning")
    return (
      <main>
        <section className="start-section">
          <h2>CONTRA RELOJ!</h2>
          <p>
            En esta prueba hay 4 opciones de respuesta donde solo una es la
            correcta. Tendrás un tiempo limite para contestar, si se termina el
            tiempo, la pregunta pasará a la siguiente. Al final del test
            obtendrás tu puntuación.
          </p>
          <p>
            UNA VEZ SELECCIONES LA RESPUESTA, SE MARCARÁ DE COLOR VERDE SI ES
            CORRECTA
            <div className="rigth-icon">
              <i className="fa-solid fa-check"></i>
            </div>{" "}
            Ó SE MARCARÁ DE COLOR ROJO SI ES INCORRECTA
            <div className="wrong-icon">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </p>
          <div className="play-button">
            <div
              className="border-button"
              onClick={() => setQuizStatus("development")}
            >
              <i class="fa-solid fa-play"></i>
            </div>
          </div>
        </section>
      </main>
    );

  if (quizStatus === "development")
    return (
      <main>
        <section className="develop-section">
          <section className="card-quiz">
            <div className="left">
              <div className="question-number">
                <span>Pregunta {currentQuestion + 1} </span>de{" "}
                {questions.length}
              </div>
              <div className="question-title">
                {questions[currentQuestion].title}
              </div>
            </div>
            <div className="right">
              {questions[currentQuestion].options.map((answer) => (
                <button
                  key={answer.answerText}
                  onClick={(e) => handleAnswer(answer.isCorrect, e)}
                >
                  {answer.answerText}
                </button>
              ))}
            </div>
          </section>
          <section className="missing-time">
            <span>Time: {missingTime}</span>
          </section>
        </section>
      </main>
    );

  if (quizStatus === "finished")
    return (
      <main>
        <section className="finish-section">
          <section className="card-finished">
            {score === questions.length && (
              <p className="game-won">Muy bien, lo Lograste!</p>
            )}
            <div className="game-finished">
              <span>
                Has obtenido {score} de {questions.length}
              </span>
              <div className="btns-container">
                <button onClick={() => resetQuiz("development")}>
                  Volver a Jugar
                </button>
                <button onClick={() => resetQuiz("shown_answers")}>
                  Ver Respuestas
                </button>
                <button onClick={() => resetQuiz("beginning")}>Salir</button>
              </div>
            </div>
          </section>
        </section>
      </main>
    );
  if (quizStatus === "shown_answers")
    return (
      <main>
        <section className="shown-answers-section">
          <section className="card-shown-answers">
            <div className="left">
              <div className="question-number">
                <span>Pregunta {currentQuestion + 1} </span>de{" "}
                {questions.length}
              </div>
              <div className="question-title">
                {questions[currentQuestion].title}
              </div>
            </div>
            <div className="answers-right">
              <div className="answer">
                {
                  questions[currentQuestion].options.filter(
                    (answer) => answer.isCorrect,
                  )[0].answerText
                }
              </div>
              <button
                onClick={() =>
                  currentQuestion < questions.length - 1
                    ? setCurrentQuestion(currentQuestion + 1)
                    : resetQuiz("beginning")
                }
              >
                {currentQuestion !== questions.length - 1 ? (
                  <i className="fa-solid fa-chevron-right"></i>
                ) : (
                  <i className="fa-solid fa-xmark"></i>
                )}
              </button>
            </div>
          </section>
        </section>
      </main>
    );
};

export default QuestionsTest;
