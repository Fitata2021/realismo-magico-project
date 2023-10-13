import React, { useEffect, useState } from "react";
import questions from "../utils/Question";
import "../styles/QuestionsTest.css";

const QuestionsTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStatus, setQuizStatus] = useState("beginning");
  const [missingTime, setMissingTime] = useState(15);

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
          <article className="graphic">
            <ul>
              <li className="point">
                <div></div>
                <p></p>
              </li>
              <li className="point">
                <div></div>
                <p></p>
              </li>
              <li className="point">
                <div></div>
                <p></p>
              </li>
              <li className="point">
                <div></div>
                <p></p>
              </li>
            </ul>
          </article>
          <article className="info1">
            <h1 className="info-title">TEST DE SELECCION MULTIPLE</h1>
            <p>
              Para poder realizar este test es necesario que hayas abordado todo
              el contenido sobre realismo magico presentado en esta pagina. Las
              preguntas estan diseñadas como selección multiple y solo una de
              las opciones es correcta. Tendras un tiempo limite para contestar,
              si se termina el tiempo y no has contestado, la pregunta pasará a
              la siguiente. Al final del test obtendras tu puntuación.
            </p>
          </article>

          <article className="info2">
            <div>
              <p>
                UNA VEZ SELECCIONES LA RESPUESTA, SE MARCARÁ DE COLOR VERDE SI
                ES CORRECTA Ó SE MARCARÁ DE COLOR ROJO SI ES INCORRECTA
              </p>
              <div className="check-icons">
                <div className="rigth-icon">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="wrong-icon">
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>

            <button
              className="info2-btn"
              onClick={() => setQuizStatus("development")}
            >
              COMENZAR
            </button>
          </article>
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
                    (answer) => answer.isCorrect
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
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </section>
        </section>
      </main>
    );
};

export default QuestionsTest;
