import React from "react";
import "../styles/Artistas.css";
// import banner from "../images/artists-images/lorca-banner.jpg";
import ArtistData from "../utils/ArtistData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const banner =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/78b4f550-a844-46b6-c324-a8aced0ed300/public";

const Artistas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="main-artists">
      <h1 className="page-title">ARTISTAS</h1>
      <div className="container">
        <img src={banner} alt="" className="banner-artists" />
      </div>
      <section className="description">
        <h2 className="description-title">¿Qué los caracteriza?</h2>
        <p>
          Los artistas plásticos que trabajan en el movimiento del Realismo
          Mágico son aquellos que utilizan su talento y creatividad para plasmar
          visualmente los elementos característicos de esta corriente artística.
          A través de sus obras, buscan transmitir la sensación de lo mágico y
          lo fantástico en combinación con elementos realistas, creando un mundo
          visualmente impactante y enigmático.
        </p>

        <p>
          La definición del Realismo Mágico en el arte plástico implica la
          representación de escenas y objetos que desafían la lógica y la
          realidad convencional. Los artistas buscan combinar elementos
          cotidianos y reconocibles con elementos fantásticos y surrealistas,
          creando composiciones que se sitúan en un territorio ambiguo entre lo
          real y lo imaginario.
        </p>

        <p>
          Una de las características distintivas de los artistas plásticos del
          Realismo Mágico es su habilidad para crear imágenes detalladas y
          realistas, que capturan la atención y la imaginación del espectador.
          Utilizan técnicas precisas y minuciosas para representar cada detalle
          de sus obras, lo que contribuye a crear una sensación de verosimilitud
          incluso en las escenas más fantásticas.
        </p>

        <p>
          Los temas representados por los artistas suelen estar imbuidos de una
          atmósfera enigmática y misteriosa. Pueden abordar temas como el
          tiempo, la memoria, los sueños, la muerte y la dualidad de la
          existencia humana. Estos temas se presentan de manera simbólica y
          metafórica, dejando espacio para la interpretación y la reflexión por
          parte del espectador.
        </p>

        <p>
          En cuanto al estilo visual, los artistas plásticos del Realismo Mágico
          suelen utilizar una paleta de colores rica y evocadora, que contribuye
          a crear la atmósfera mágica y enigmática que caracteriza a sus obras.
          Además, suelen incorporar elementos simbólicos y surrealistas, como
          objetos flotantes, paisajes oníricos, animales fantásticos y figuras
          humanas que desafían la gravedad o se transforman en otros seres.
          Estos artistas retornan a la minuciosidad y el detalle característicos
          del realismo clásico pero añadiendo la libertad y capacidad de crear
          nuevos mundos mágicos y misteriosos.
        </p>

        <p>
          En resumen, los artistas plásticos que trabajan en el movimiento del
          Realismo Mágico son aquellos que utilizan su talento y creatividad
          para representar visualmente los elementos característicos de esta
          corriente artística. A través de su habilidad técnica y su
          imaginación, logran crear obras que combinan lo real y lo fantástico,
          invitando al espectador a adentrarse en un mundo enigmático y lleno de
          posibilidades.
        </p>
        <p>
          Es importante tener en cuenta que el realismo mágico en el arte
          plástico puede manifestarse de diferentes maneras, ya que cada artista
          tiene su estilo propio y su enfoque único. Sin embargo, todos
          comparten el objetivo de explorar la relación entre la realidad y la
          fantasía, desafiando los límites de lo convencional y despertando la
          imaginación del espectador.
        </p>
        <br />
        <p>
          A continuación, se presentan algunos de los mayores exponentes
          latinoamericanos clásicos y contemporáneos que en su obra están
          enmarcados en el movimiento del Realismo Mágico o que de alguna manera
          en su obra, tienen elementos que conectan con lo real maravilloso. Haz
          clic en las imágenes para conocer un poco más sobre cada uno y su
          obra...
          <i
            className="fa-solid fa-hand-pointer"
            style={{ fontSize: "20px" }}
          ></i>
        </p>
      </section>
      <section>
        <ul className="artists-cards-container">
          {ArtistData.map((artist) => (
            <li
              key={artist.id}
              className="artist-card"
              onClick={() => navigate(`/artist/${artist.id}`)}
            >
              <img src={artist.img} alt="" />
              <p className="artist-name">{artist.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Artistas;
