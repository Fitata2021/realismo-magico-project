import React, { useState } from "react";

import "../styles/CouplesGame.css";
import arrayCards from "../utils/cardsData";
import butterfly_card from "../images/couple-game-images/butterfly-card.jpg";

const CouplesGame = () => {
  const [cardsList, setCardsList] = useState(
    arrayCards.sort(() => Math.random() - 0.5)
  );
  const [prevIndex, setPrevIndex] = useState(-1); //Controla 1er y 2da carta seleccionada
  const [count, setCount] = useState(0); //Cuenta las parejas descubiertas
  const [selectCounter, setSelectCounter] = useState(0); //Cuenta las cartas seleccionadas
  const [infoCard, setInforCard] = useState(cardsList); //Contiene arreglo ordenado de data para respuestas

  if (count === cardsList.length / 2) {
    cardsList.map((card) => (card.status = "finished"));
  }

  const selectCard = (index) => {
    setSelectCounter(selectCounter + 1);
    if (
      selectCounter < 2 &&
      cardsList[index].status !== "up" &&
      cardsList[index].status !== "finished"
    ) {
      cardsList[index].status = "selected";
      setCardsList([...cardsList]);

      if (prevIndex === -1) {
        setPrevIndex(index);
      } else {
        if (index !== prevIndex) {
          validateCard(index);
        } else {
          setSelectCounter(0);
        }
      }
    } else {
      setSelectCounter(0);
    }
  };

  const restart = () => {
    cardsList.map((card) => (card.status = "down"));
    setPrevIndex(-1);
    setCardsList(arrayCards.sort(() => Math.random() - 0.5));
    setCount(0);
  };

  const validateCard = (newIndex) => {
    setTimeout(() => {
      const prev = cardsList[prevIndex];
      const current = cardsList[newIndex];

      if (prev.image === current.image) {
        prev.status = "up";
        current.status = "up";
        setCount(count + 1);
        setSelectCounter(0);
        // setInfoCard(cardsList);
      } else {
        prev.status = "down";
        current.status = "down";
        setSelectCounter(0);
      }
      setCardsList([...cardsList]);
      const result = {};

      cardsList.forEach((element) => {
        if (!result[element.title]) {
          result[element.title] = element;
        }
      });
      const uniqueElements = Object.values(result);
      setInforCard(uniqueElements);
      uniqueElements.sort(function (a, b) {
        return a.id - b.id;
      });
      setPrevIndex(-1);
    }, 500);
  };

  return (
    <div>
      <main className="couples-game-main">
        <section className="info">
          <h1 className="info-title">OBRAS GEMELAS</h1>
          <p>
            En esta sección podras encontrar diferentes obras de arte realizadas
            por artistas latinoamericanos que se han inspirado en el realismo
            mágico para sus creaciones. Encuentra las parejas de obras
            pictoricas recordando las posiciones. Cada vez que aciertes en las
            seleccion de las tarjetas, se deplegará información relevante de la
            obra que acabas de descubrir.
          </p>
          <div className="warning-section">
            <article>
              PUEDES HACER CLIC SOBRE LAS TARJETAS DESBLOQUEADAS PARA AMPLIAR LA
              IMAGEN
            </article>
            <i className="fa-solid fa-arrow-left-long"></i>
          </div>
        </section>
        <button onClick={restart} className="reset-button">
          <i className="fa-sharp fa-solid fa-rotate"></i>
        </button>
        {count === cardsList.length / 2 && (
          <p className="game-won">Muy bien, lo Lograste!</p>
        )}
        <section className="cards-container">
          {cardsList.map((card, i) => (
            <div
              className={`card ${card.status}`}
              key={card.id}
              onClick={() => selectCard(i)}
            >
              {card.status !== "down" ? (
                <>
                  <img src={card.image} alt="" />
                  <div className="number-card">{Math.ceil(card.id / 2)}</div>
                </>
              ) : (
                <img src={butterfly_card} alt="" />
              )}
            </div>
          ))}
        </section>
        <section className="answers">
          <ol>
            {infoCard.length === 8 ? (
              infoCard.map((infocar) => (
                <li className={infocar.status}>
                  {infocar.status === "up" || infocar.status === "finished" ? (
                    <div className="answer-info">
                      <div className="number-answer">
                        {Math.ceil(infocar.id / 2)}
                      </div>
                      <p>
                        <b>Titulo:</b> {infocar.title} | <b>Autor:</b>{" "}
                        {infocar.author} | {infocar.medium}, {infocar.size}
                      </p>
                    </div>
                  ) : (
                    <div>?</div>
                  )}
                </li>
              ))
            ) : (
              <>
                <li className="down">?</li>
                <li className="down">?</li>
                <li className="down">?</li>
                <li className="down">?</li>
                <li className="down">?</li>
                <li className="down">?</li>
                <li className="down">?</li>
                <li className="down">?</li>
              </>
            )}
          </ol>
        </section>
      </main>
    </div>
  );
};

export default CouplesGame;
