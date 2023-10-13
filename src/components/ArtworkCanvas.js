import "../styles/ArtworkCanvas.css";
import { useDrop } from "react-dnd";
import Palette from "../utils/Palette";

const ArtworkCanvas = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "elemento",
    drop: () => ({ name: "lienzo" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  return (
    <div style={{ display: "flex" }}>
      <Palette />
      <div
        ref={(node) => drop(node)}
        style={{ width: "500px", height: "500px", border: "2px solid #000" }}
      >
        {isActive ? "Suelta los elementos aquí" : "Arrastra elementos aquí"}
      </div>
    </div>
  );
};

export default ArtworkCanvas;
