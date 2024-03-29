import React, { useEffect, useState } from "react";
import interact from "interactjs";
import backgroundCards from "../utils/BackgroundImages";
import draggableImages from "../utils/DraggableImages";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { saveAs } from "file-saver";
import "../styles/ArtworkCanvas.css";
import { useNavigate } from "react-router-dom";

const ArtworkCanvas = () => {
  const [background, setBackground] = useState(backgroundCards[0].image);
  const [toogleInstructions, setToogleInstructions] = useState(false);

  const navigate = useNavigate();
  // const [coordinateX, setCoordinateX] = useState(0);
  // const [coordinateY, setCoordinateY] = useState(0);
  // const [artworkWith, setArtworkWith] = useState(0);
  // const [artworkHeight, setArtworkHeight] = useState(0);

  //Getting coordinates artwork...
  // useEffect(() => {
  //   const artwork = document.getElementById("artworkfinished");
  //   if (artwork) {
  //     const rect = artwork.getBoundingClientRect();
  //     const x = rect.left;
  //     const y = rect.top;
  //     const width = rect.width;
  //     const height = rect.height;

  //     setCoordinateX(x);
  //     setCoordinateY(y);
  //     setArtworkWith(width);
  //     setArtworkHeight(height);

  //     console.log(`x: ${x}, y: ${y}, width: ${width}, height: ${height}`);
  //   }
  // }, []);

  const handleContextMenu = (e) => {
    e.preventDefault(); // Evita la acción por defecto (como el menú contextual)
    document.body.classList.add("dragging");
  };

  // const recargarPagina = () => {
  //   window.location.reload();
  // };

  function startDrag() {}

  function endDrag() {
    document.body.classList.remove("dragging");
  }

  //Move draggables elements inside container...

  useEffect(() => {
    window.scrollTo(0, 0);

    interact(".draggable").draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "#container-interact-draggables",
        }),
      ],
      autoScroll: true,

      listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,

        // call this function on every dragend event
        end(event) {
          var textEl = event.target.querySelector("p");

          textEl &&
            (textEl.textContent =
              "moved a distance of " +
              Math.sqrt(
                (Math.pow(event.pageX - event.x0, 2) +
                  Math.pow(event.pageY - event.y0, 2)) |
                  0,
              ).toFixed(2) +
              "px");
        },
      },
      onstart: startDrag,
      onend: endDrag,
    });

    function dragMoveListener(event) {
      var target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      // translate the element
      target.style.transform = "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;
  }, []);

  // //Downloading the artwork image at user device...
  // function downloadArtWork(x, y, width, height) {
  //   alert("se descargó tu obra");
  //   const elementoCapturar = document.getElementById("main-section");

  //   html2canvas(elementoCapturar, {
  //     x: x,
  //     y: y,
  //     width: width,
  //     height: height,
  //     scrollX: 0,
  //     scrollY: 0,
  //   }).then((canvas) => {
  //     canvas.toBlob((blob) => {
  //       saveAs(blob, "mi-obra_realismo-magico.jpg");
  //     }, "mi-obra_realismo-magico/jpeg");
  //   });
  // }

  return (
    <main className="main-artworkcanvas" id="main-section">
      <div
        className="back-icon"
        onClick={() => navigate("/games")}
        style={toogleInstructions ? { display: "inline" } : { display: "none" }}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
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
          <h1 className="info-title">CREA TU OBRA</h1>
          <p>
            Ahora que conoces las características del Realismo Mágico podrás
            crear una obra. Dispones de 5 escenarios que puedes cambiar pulsando
            sobre ellos, y 9 personajes que puedes arrastrar y soltar para
            ubicarlos según lo desees. Al terminar, captura la pantalla de tu
            dispositivo, recorta la imagen y guarda tu obra.
            <div className="warning-section">
              <article>SELECCIONA, ARRASTRA, SUELTA</article>
              <i className="fa-regular fa-object-group"></i>
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

      <div
        id="container-interact-draggables"
        className="container-interact-draggables"
        style={
          toogleInstructions ? { filter: "blur(0px)" } : { filter: "blur(8px)" }
        }
      >
        <div className="option-images">
          <img
            id="butterfly"
            className="draggable"
            src={draggableImages[0].image}
            alt=""
            data-x={0}
            data-y={0}
            onContextMenu={handleContextMenu}
          />
          <img
            id="pez"
            className="draggable"
            src={draggableImages[1].image}
            alt=""
            data-x={0}
            data-y={0}
            onContextMenu={handleContextMenu}
          />
          <img
            id="jaguar"
            className="draggable"
            src={draggableImages[2].image}
            alt=""
            data-x={0}
            data-y={0}
            onContextMenu={handleContextMenu}
          />
          <img
            id="armor"
            className="draggable"
            src={draggableImages[3].image}
            alt=""
            data-x={0}
            data-y={0}
            onContextMenu={handleContextMenu}
          />
          <img
            id="flowers"
            className="draggable"
            src={draggableImages[4].image}
            alt=""
            data-x={0}
            data-y={0}
            onContextMenu={handleContextMenu}
          />
          <img
            id="hyena"
            className="draggable"
            src={draggableImages[5].image}
            alt=""
            data-x={0}
            data-y={0}
            onContextMenu={handleContextMenu}
          />
          <img
            id="fungus"
            className="draggable"
            src={draggableImages[6].image}
            alt=""
            data-x={0}
            data-y={0}
            onContextMenu={handleContextMenu}
          />
          <img
            id="owl"
            className="draggable"
            src={draggableImages[7].image}
            alt=""
            data-x={0}
            data-y={0}
            onContextMenu={handleContextMenu}
          />
          <img
            id="woman"
            className="draggable"
            src={draggableImages[8].image}
            alt=""
            data-x={0}
            data-y={0}
            onContextMenu={handleContextMenu}
          />
        </div>

        <div id="dropzone" className="file-interact-dropzone">
          <img
            className="background"
            id="artworkfinished"
            src={background}
            alt=""
          />
        </div>
      </div>
      <div
        className="background-images"
        style={
          toogleInstructions ? { filter: "blur(0px)" } : { filter: "blur(8px)" }
        }
      >
        {/* <button onClick={recargarPagina} className="reset-button">
          <i className="fa-sharp fa-solid fa-rotate"></i>
        </button> */}
        <img
          onClick={() => {
            setBackground(backgroundCards[0].image);
          }}
          src={backgroundCards[0].image}
          alt=""
        />
        <img
          onClick={() => {
            setBackground(backgroundCards[1].image);
          }}
          src={backgroundCards[1].image}
          alt=""
        />
        <img
          onClick={() => {
            setBackground(backgroundCards[2].image);
          }}
          src={backgroundCards[2].image}
          alt=""
        />
        <img
          onClick={() => {
            setBackground(backgroundCards[3].image);
          }}
          src={backgroundCards[3].image}
          alt=""
        />
        <img
          onClick={() => {
            setBackground(backgroundCards[4].image);
          }}
          src={backgroundCards[4].image}
          alt=""
        />
        {/* <div
          className="download-button"
          onClick={() =>
            downloadArtWork(
              coordinateX,
              coordinateY - 128,
              artworkWith,
              artworkHeight,
            )
          }
        >
          <i className="fa-solid fa-download"></i>
        </div> */}
      </div>
    </main>
  );
};

export default ArtworkCanvas;
