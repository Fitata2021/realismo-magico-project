import React, { useEffect, useState } from "react";
import interact from "interactjs";
import backgroundCards from "../utils/BackgroundImages";
import draggableImages from "../utils/DraggableImages";
// import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import "../styles/ArtworkCanvas.css";

const ArtworkCanvas = () => {
  const [background, setBackground] = useState(backgroundCards[0].image);
  const [coordinateX, setCoordinateX] = useState(0);
  const [coordinateY, setCoordinateY] = useState(0);
  const [artworkWith, setArtworkWith] = useState(0);
  const [artworkHeight, setArtworkHeight] = useState(0);

  //Getting coordinates artwork...
  useEffect(() => {
    const artwork = document.getElementById("artworkfinished");
    if (artwork) {
      const rect = artwork.getBoundingClientRect();
      const x = rect.left;
      const y = rect.top;
      const w = rect.right;
      const z = rect.bottom;
      const width = w - x;
      const height = z - y;
      // const width = rect.width;
      // const height = rect.height;

      setCoordinateX(x);
      setCoordinateY(y);
      setArtworkWith(width);
      setArtworkHeight(height);

      console.log(`x: ${x}, y: ${y}, width: ${width}, height: ${height}`);
    }
  }, []);

  console.log(
    `setx: ${coordinateX}, sety: ${coordinateY}, setwidth: ${artworkWith}, setheight: ${artworkHeight}`,
  );
  const handleContextMenu = (e) => {
    e.preventDefault(); // Evita la acción por defecto (como el menú contextual)
  };

  // const recargarPagina = () => {
  //   window.location.reload();
  // };

  function startDrag() {
    document.body.classList.add("dragging");
  }

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

  function downloadArtWork(x, y, width, height) {
    alert("se descargó");
    const elementoCapturar = document.getElementById("main-section"); // Reemplaza 'elemento' con el ID de tu elemento

    html2canvas(elementoCapturar, {
      // Establecer las dimensiones del área a capturar
      x: x,
      y: y,
      width: width,
      height: height,
      scrollX: 0,
      scrollY: 0,
    }).then((canvas) => {
      // Crear un enlace para descargar la imagen
      canvas.toBlob((blob) => {
        saveAs(blob, "captura_pantalla.jpg"); // Nombre del archivo a descargar
      }, "artwork/jpeg");
    });
  }

  return (
    <main className="main-artworkcanvas" id="main-section">
      <div
        id="container-interact-draggables"
        className="container-interact-draggables"
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
      <div className="background-images">
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
        <div
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
        </div>
      </div>
    </main>
  );
};

export default ArtworkCanvas;
