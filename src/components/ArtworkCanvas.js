import React, { useEffect, useState } from "react";
import interact from "interactjs";
import backgroundCards from "../utils/BackgroundImages";
import draggableImages from "../utils/DraggableImages";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../styles/ArtworkCanvas.css";

const ArtworkCanvas = () => {
  const [background, setBackground] = useState(backgroundCards[0].image);

  const handleContextMenu = (e) => {
    e.preventDefault(); // Evita la acción por defecto (como el menú contextual)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    function onDrag(element) {
      const draggableElement = document.getElementById(element);

      const interactInstance = interact(draggableElement);

      interactInstance.draggable({
        onmove: (event) => {
          const target = event.target;
          const x =
            (parseFloat(target.getAttribute("data-x")) || 0) + event.dx * 0.2;
          const y =
            (parseFloat(target.getAttribute("data-y")) || 0) + event.dy * 0.2;

          target.style.transform = `translate(${x}px, ${y}px)`;
          target.setAttribute("data-x", x);
          target.setAttribute("data-y", y);
        },
      });
      return () => {
        interactInstance.unset();
      };
    }
    onDrag("butterfly");
    onDrag("pez");
    onDrag("jaguar");
    onDrag("armor");
    onDrag("flowers");
    onDrag("hyena");
    onDrag("fungus");
    onDrag("owl");
    onDrag("woman");
  }, []);

  //Resize a selected image...

  // interact(".draggable").resizable({
  //   // resize from all edges and corners
  //   edges: { left: true, right: true, bottom: true, top: true },

  //   listeners: {
  //     move(event) {
  //       var target = event.target;
  //       var x = parseFloat(target.getAttribute("data-x")) || 0;
  //       var y = parseFloat(target.getAttribute("data-y")) || 0;

  //       // update the element's style
  //       target.style.width = event.rect.width + "px";
  //       target.style.height = event.rect.height + "px";

  //       // translate when resizing from top or left edges
  //       x += event.deltaRect.left;
  //       y += event.deltaRect.top;

  //       target.style.transform = "translate(" + x + "px," + y + "px)";

  //       target.setAttribute("data-x", x);
  //       target.setAttribute("data-y", y);
  //       target.textContent =
  //         Math.round(event.rect.width) +
  //         "\u00D7" +
  //         Math.round(event.rect.height);
  //     },
  //   },
  //   modifiers: [
  //     // keep the edges inside the parent
  //     interact.modifiers.restrictEdges({
  //       outer: "parent",
  //     }),

  //     // minimum size
  //     interact.modifiers.restrictSize({
  //       min: { width: 50, height: 50 },
  //       max: { width: 300, height: 300 },
  //     }),
  //   ],

  //   inertia: true,
  // });

  function descargarComoPDF() {
    alert("se descargo pdf");
    const divElement = document.getElementById("main-section");
    html2canvas(divElement, {
      //scale: 0.3, // Ajusta el escalamiento según sea necesario
      windowWidth: divElement.offsetHeight, // Toma en cuenta el ancho del contenido
      windowHeight: divElement.offsetWidth, // Toma en cuenta el alto del contenido
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();
      pdf.addImage(
        imgData,
        "PNG",
        1.5,
        1.5,
        canvas.height / 5,
        canvas.width / 2,
      );
      pdf.save("mi-obra-realismo-magico.pdf");
    });
  }

  return (
    <main id="main-section">
      <div className="option-images">
        <img
          id="butterfly"
          className="draggable"
          src={draggableImages[0].image}
          alt=""
          onContextMenu={handleContextMenu}
        />
        <img
          id="pez"
          className="draggable"
          src={draggableImages[1].image}
          alt=""
          onContextMenu={handleContextMenu}
        />
        <img
          id="jaguar"
          className="draggable"
          src={draggableImages[2].image}
          alt=""
          onContextMenu={handleContextMenu}
        />
        <img
          id="armor"
          className="draggable"
          src={draggableImages[3].image}
          alt=""
          onContextMenu={handleContextMenu}
        />
        <img
          id="flowers"
          className="draggable"
          src={draggableImages[4].image}
          alt=""
          onContextMenu={handleContextMenu}
        />
        <img
          id="hyena"
          className="draggable"
          src={draggableImages[5].image}
          alt=""
          onContextMenu={handleContextMenu}
        />
        <img
          id="fungus"
          className="draggable"
          src={draggableImages[6].image}
          alt=""
          onContextMenu={handleContextMenu}
        />
        <img
          id="owl"
          className="draggable"
          src={draggableImages[7].image}
          alt=""
          onContextMenu={handleContextMenu}
        />
        <img
          id="woman"
          className="draggable"
          src={draggableImages[8].image}
          alt=""
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
          onClick={() => descargarComoPDF()}
          className="fa-solid fa-download"
        ></i>
      </div>
    </main>
  );
};

export default ArtworkCanvas;
