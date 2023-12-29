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

  const handleContextMenu = (e) => {
    e.preventDefault(); // Evita la acción por defecto (como el menú contextual)
  };

  function startDrag() {
    document.body.classList.add("dragging");
  }

  function endDrag() {
    document.body.classList.remove("dragging");
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    interact(".draggable").draggable({
      inertia: true,
      modifiers: [],
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

    // function onDrag(element) {
    //   const draggableElement = document.getElementById(element);

    //   const interactInstance = interact(draggableElement);

    //   interactInstance.draggable({
    //     onmove: (event) => {
    //       const target = event.target;
    //       const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    //       const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    //       target.style.transform = `translate(${x}px, ${y}px)`;
    //       target.setAttribute("data-x", x);
    //       target.setAttribute("data-y", y);
    //     },
    //   });
    //   return () => {
    //     interactInstance.unset();
    //   };
    // }
    // onDrag("butterfly");
    // onDrag("pez");
    // onDrag("jaguar");
    // onDrag("armor");
    // onDrag("flowers");
    // onDrag("hyena");
    // onDrag("fungus");
    // onDrag("owl");
    // onDrag("woman");
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

  // function descargarComoPDF() {
  //   alert("se descargo pdf");
  //   const divElement = document.getElementById("main-section");
  //   html2canvas(divElement, {
  //     //scale: 0.3, // Ajusta el escalamiento según sea necesario
  //     windowWidth: divElement.offsetHeight, // Toma en cuenta el ancho del contenido
  //     windowHeight: divElement.offsetWidth, // Toma en cuenta el alto del contenido
  //   }).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");

  //     const pdf = new jsPDF();
  //     pdf.addImage(
  //       imgData,
  //       "PNG",
  //       1.5,
  //       1.5,
  //       canvas.height / 5,
  //       canvas.width / 2,
  //     );
  //     pdf.save("mi-obra-realismo-magico.pdf");
  //   });
  // }

  return (
    <main id="main-section">
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
        <img className="background" src={background} alt="" />
      </div>
      <div className="background-images">
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

        <i
          onClick={() => downloadArtWork(740, 25, 750, 500)}
          className="fa-solid fa-download"
        ></i>
      </div>
    </main>
  );
};

export default ArtworkCanvas;
