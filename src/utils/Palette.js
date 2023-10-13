// Palette.js
import React from "react";
import { useDrag } from "react-dnd";

import image1 from "../images/artists-images/cruz-banner.jpg";
import image2 from "../images/artists-images/kahlo-banner.jpg";

const Elemento = ({ imagen }) => {
  const [, drag] = useDrag({
    type: "elemento",
  });

  return (
    <img
      className="image_palette"
      ref={(node) => drag(node)}
      src={imagen}
      alt="Elemento"
      width="50"
      height="50"
    />
  );
};

const Palette = () => {
  const elementos = [{ imagen: { image1 } }, { imagen: { image2 } }];

  return (
    <div>
      {elementos.map((elemento, index) => (
        <Elemento key={index} imagen={elemento.imagen} />
      ))}
    </div>
  );
};

export default Palette;
