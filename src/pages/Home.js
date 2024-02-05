import React from "react";
// import banner from "../images/artists-images/cruz-banner.jpg";
import "../styles/Home.css";
import { useEffect } from "react";
import imglorca14 from "../images/artist-photos/lorca-artworks/imagelorca14.jpg";
import imgRoh from "../images/artist-photos/franz-roh.jpg";
import imgAncestral from "../images/artist-photos/cruz-artworks/imgCruz2.jpg";
import { setIsLoading } from "../store/slices/isLoading.slice";

const banner =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/80f2a258-e66a-4f9b-382d-b4dcfcb69b00/public";

if (!banner) {
  setIsLoading(true);
}
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-nav-bar">
      <h1 className="page-title">"LO REAL MARAVILLOSO"</h1>
      <h1 className="home-title">"Aquí lo insólito es lo cotidiano"</h1>
      <h3 className="home-subtitle">Carpentier</h3>

      <div className="container-banner-home">
        <img src={banner} alt="" className="banner-home" />
      </div>
      <section className="description">
        <h2 className="description-title">Que es el Realismo Magico?</h2>
        <p>
          El realismo mágico es un estilo que ha dejado una marca indeleble en
          la historia del arte. Surgido en el siglo XX, se caracteriza por la
          combinación de elementos realistas y fantásticos, desafiando las
          convenciones tradicionales. A pesar de una persistente controversia en
          torno a conceptos y definiciones, en Latinoamérica es comúnmente
          relacionado con el concepto de "lo real maravilloso" del escritor
          cubano Alejo Carpentier.
        </p>

        <p>
          Respecto al campo literario, entre las obras más emblemáticas del
          realismo mágico destaca sin duda "Cien años de soledad" del escritor
          colombiano Gabriel García Márquez. En esta novela, se crea un mundo
          donde lo mágico y lo real se entrelazan de manera extraordinaria.
          Personajes que viven más de cien años, lluvias interminables, objetos
          que levitan y otros fenómenos inexplicables dan forma a un relato
          cautivador que atrapa al lector desde la primera página.
        </p>
        <p>
          Pero es importante saber que el realismo mágico no se limita
          únicamente a la literatura; sino que también ha influido en otras
          formas de expresión artística como las artes plásticas. En particular,
          en el campo de la pintura, han sido diferentes artistas los que han
          utilizado elementos mágicos y oníricos en sus obras, desafiando la
          realidad y creando imágenes sorprendentes que desconciertan y fascinan
          al espectador.
        </p>
        <img className="lorca-painting" src={imglorca14} alt="" />
        <p className="subparagraph">
          <i>
            "La Cacería de la Sirena", Guillermo Lorca Garcia, Oleo sobre Lienzo
          </i>
        </p>
        <br />

        <p>
          El realismo mágico es un intento de capturar la esencia de la realidad
          a través de la mezcla de lo ordinario y lo extraordinario. En lugar de
          presentar un mundo puramente fantástico o completamente realista, los
          escritores y artistas que utilizan este estilo buscan mostrar una
          realidad ampliada, llena de posibilidades inexploradas y misterios
          ocultos.
        </p>
        <p>
          La magia en el realismo mágico no es solo una herramienta para
          sorprender o entretener, sino que también es una metáfora de la
          complejidad de la existencia humana. A través de la fusión de lo
          mágico y lo real, los autores exploran temas profundos como la
          soledad, el amor, la muerte y la identidad.
        </p>
        <p>
          El realismo mágico invita al espectador a cuestionar los límites de la
          realidad y a sumergirse en un mundo donde lo imposible se vuelve
          posible. A través de la combinación de lo cotidiano y lo fantástico,
          se crea una atmósfera única que captura la atención y la imaginación
          del lector o espectador.
        </p>
        <p>
          En resumen, es un estilo literario y artístico que desafía las
          convenciones y mezcla elementos realistas con elementos mágicos. A
          través de esta fusión, los escritores y artistas logran crear un
          universo único y evocador que invita al lector a explorar la
          complejidad de la existencia humana y a reflexionar sobre la
          naturaleza de la realidad.
        </p>
        <br />
        <h2 className="description-title">Acerca de su historia...</h2>
        <p>
          El alemán crítico de arte Franz Roh (1890-1965), introdujo el término
          "realismo mágico" en 1925 para definir una nueva fase del arte que
          surgía después del expresionismo. En su libro "Nach Expressionismus:
          Magischer Realismus", Roh se dedicó a clasificar y comprender esta
          fase desconocida del arte contemporáneo.
        </p>
        <img className="roh-image" src={imgRoh} alt="" />
        <p className="subparagraph">
          <i>Franz Roh (1890 - 1965)</i>
        </p>
        <br />
        <p>
          Roh reconoció la dificultad de ser un "historiador del presente", ya
          que la perspectiva contemporánea a menudo no logra apreciar
          completamente los cambios y desarrollos artísticos. Sin embargo, él
          vio el realismo mágico como un cambio tan esencial como el ocurrido
          entre el impresionismo y el expresionismo.
        </p>
        <p>
          Hoy en día, el término "realismo mágico" está estrechamente asociado
          con la literatura hispanoamericana, aunque inicialmente se utilizó
          para describir un movimiento artístico en la pintura europea.
        </p>
        <p>
          En términos de arte, el realismo mágico se distingue por su retorno a
          la objetividad y la representación de la realidad de una manera nueva
          y sorprendente. A diferencia del expresionismo, que a menudo se
          centraba en los efectos emocionales, el realismo mágico busca capturar
          la integridad seductora de los objetos y la magia inherente a la
          existencia.
        </p>
        <p>
          Los artistas de esta corriente no se limitan a copiar la naturaleza,
          sino que construyen un mundo nuevo a través de su obra, explorando la
          relación entre lo familiar y lo misterioso que yace detrás de la
          representación. Esto no es un retroceso, sino una apertura a nuevas
          posibilidades creativas.
        </p>
        <p>
          En resumen, Franz Roh acuñó el término "realismo mágico" para
          describir una nueva fase del arte que se alejaba del expresionismo y
          abrazaba una forma de objetividad en la representación de la realidad,
          resaltando la magia que subyace en el mundo que nos rodea.
        </p>

        <br />
        <h2 className="description-title">Latinoamerica</h2>

        <p>
          Aunque el realismo magico en America Latina es reconocido
          principalmente en el campo de la literatura con grandes escritores que
          han elevado este movimiento a su punto mas algido, en el campo de las
          artes plásticas tambien ha sido explorado por artistas que han buscado
          incorporar esa magia ancestral y costumbrista latinoamericana de
          mitos, leyendas y tradiciones.
        </p>
        <p>
          Lo improbable basado en la realidad y en la cosmovision de una cultura
          con grandes arraigos antepasados reflejados en mitos e historias son
          una parte importante de la identidad de muchas comunidades
          latinoamericanas. Los dioses,los seres mitologicos,el inframundo,los
          animales sagrados y la manera de interpretar el mundo, han sido una
          una de las mas ricas fuentes de influencia para artistas plásticos en
          su procesos de creación. De igual manera, la entremezcla de culturas
          debido a la colonizacion ha permitido el nacimiento de nuevos estilos
          de vida y expresion que se pueden evidenciar en las artes.
        </p>
        <p>
          Existen tambien otros artistas plasticos inspirados en las narrativas
          de los escritores pertenecientes al "realismo magico" que en sus obras
          representan escenas de aquellas historias fantasticas. En estos casos,
          buscan recrear los relatos visualmente desde su propia manera grafica
          de interpretación y llevando al espectador a contemplar y sentir la
          obra tanto literaria como plástica y visual.
        </p>

        <img className="ancestral-image" src={imgAncestral} alt="" />
        <p className="subparagraph">
          <i>Entre azules y neblina, Darwin Cruz, Oleo sobre tela</i>
        </p>
        <br />
        <p>
          Este espacio está diseñado para explorar el fascinante mundo del
          realismo mágico en las artes plásticas, centrándose especialmente en
          la pintura. En las secciones adicionales, descubrirás más información
          y participarás en diversas actividades interactivas que te sumergirán
          en este tema de manera entretenida y educativa. ¡Bienvenido a un viaje
          encantador a través de la magia y la creatividad artística!
        </p>
      </section>
    </div>
  );
};

export default Home;
