import React from "react";
// import banner from "../images/artists-images/rivera-banner.jpg";
import "../styles/Noticias.css";
import { useEffect } from "react";
// import leonoraSculpture1 from "../images/news-images/leonora-sculpture1-news.jpg";
// import leonoraSculpture2 from "../images/news-images/leonora-sculpture2-news.jpg";
// import rostrosMacondo from "../images/news-images/macondo-news.jpg";
// import cesarRealismoMagico from "../images/news-images/cesar-realismomagico-news.jpg";
// import lorcaExpo from "../images/news-images/lorcaExpo-news.jpg";
// import botero from "../images/news-images/botero-news.jpg";

const leonoraSculpture1 =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/22a85f21-cabc-4f6d-726a-27da8c0d1100/public";
const leonoraSculpture2 =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/206df404-88d8-4de0-73d0-20d6109f6d00/public";
const rostrosMacondo =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/bba067db-992c-4460-69ee-f29970fd6400/public";
const cesarRealismoMagico =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/da789faf-be22-434b-3360-5ca731de0400/public";
const lorcaExpo =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/1f7223d0-9a42-4e76-c4c4-50c487d60d00/public";
const botero =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/f9b66995-54e9-4b08-d0b2-ab8d1f789400/public";

const banner =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/c09af5c6-fb70-46f4-c409-a7cc13d2e800/public";

const Noticias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-news">
      <h1 className="page-title">NOTICIAS</h1>
      <div className="container">
        <img src={banner} alt="" className="banner-noticias" />
      </div>
      <section className="description">
        <h2 className="description-title">
          EL REALISMO MÁGICO BRILLÓ EN EL SHOW INAUGURAL DE LOS JUEGOS
          INTERMUNICIPALES CESAR - COLOMBIA 2023
        </h2>
        <div className="container-news">
          <p>
            El Valle Mágico, presentado en los Juegos Intermunicipales 2023 por
            el Gobierno del Cesar, combinó danza y teatro musical para evocar
            pinturas y leyendas representativas de la región. Desde la Sirena
            del Guatapurí hasta el canto de El Doroy, la obra honró tradiciones
            y leyendas, destacando también la historia de la indígena Francisca
            y el suceso del almirante Padilla. Este espectáculo, que fusionó lo
            real maravilloso del Realismo Mágico, rindió homenaje a la Sierra
            Nevada de Santa Marta y los ríos Cesar y Guatapurí. "El Valle
            Mágico" es un hito cultural y deportivo que enriquece la vida y el
            talento del Cesar.
          </p>
          <img className="images-news" src={cesarRealismoMagico} alt="" />
        </div>
        <br />
        <h2 className="description-title">
          OBRA DONADA POR LEONORA CARRINGTON A LA CIUDAD DE MÉXICO
        </h2>
        <div className="container-news">
          <img className="images-news" src={leonoraSculpture1} alt="" />
          <p>
            La pintora y escritora vivió una breve temporada en Mixcoac, donde
            tomaba el tranvía para poder visitar el Centro Histórico y el Zócalo
            capitalino. Del pueblo de Mixcoac al Zócalo, el viaje en tranvía
            duraba 45 minutos. Muy cerca del Zócalo se encuentra la
            banca-escultura “Ya no hay lugar”, de Leonora Carrington -a espaldas
            de la Catedral, en la calle de Guatemala-, que forma parte del
            proyecto Diálogo de bancas.
          </p>
        </div>
        <br />
        <h2 className="description-title">
          UNA OBRA DE LEONORA CARRINGTON SE UBICARÁ DE MANERA PERMANENTE EN EL
          JARDÍN DEL ANTIGUO PALACIO DEL ARZOBISPADO EN MEXICO
        </h2>
        <div className="container-news">
          <p>
            Donada por su hijo Pablo Weisz, la pieza de bronce (260 x 125x 82)
            quedará de manera permanente en este espacio “para evocar la esencia
            y la presencia de la artista”. Actuamente este museo cuenta con 8
            esculturas en total de la artista.
          </p>
          <img className="images-news" src={leonoraSculpture2} alt="" />
        </div>
        <br />
        <h2 className="description-title">
          LABORATORIO DE CREACIÓN EDITORIAL: UN FANZINE CON REALISMO MÁGICO EN
          CALI - COLOMBIA
        </h2>
        <div className="container-news">
          <img className="images-news" src={rostrosMacondo} alt="" />
          <p>
            Lugar: (espacio Maker, Centro Cultura Comfandi) Call 8 # 6 23 Barrio
            Santa Rosa Público Objetivo: Jóvenes, adultos y adultos mayores.
            Tipo de evento: Modalidad: Presencial Fecha de inicio: Sáb,
            07/10/2023 - 14:00 Fecha de finalización: Sáb, 07/10/2023 - 16:00
            Iniciaremos el laboratorio con un recorrido por la exposición
            fotográfica Rostros Macondianos, Cultura y Literatura. De esta
            manera, las y los asistentes se acercan en primera instancia a una
            parte de ese realismo mágico propuesta por Gabriel García Márquez.
            Después de dicho recorrido, iniciaremos la construcción de un
            Fanzine inspirado en la expresión literaria: Realismo Mágico,
            utilizada por nuestro nobel colombiano en sus obras. Al finalizar,
            cada asistente habrá elaborado con sus propias manos una publicación
            artesanal que les invitará a relatar su propia visión del realismo
            mágico en Cali. Con este laboratorio vamos a explorar y proponer
            desde la escritura, collage y dibujo el realismo mágico de Cali
          </p>
        </div>
        <br />
        <h2 className="description-title">
          "ESPLENDOR DE LA NOCHE", DE GUILLERMO LORCA, SE PODRÁ VISITAR DEL 16
          DE OCTUBRE DE 2021 AL 2023 EN EL MOCO MUSEUM DE BARCELONA
        </h2>
        <div className="container-news">
          <p>
            Gatos gigantes de ojos amarillos, niñas angelicales y criaturas
            ignotas conforman un mundo inquietante y delicado a la vez, en el
            que conviven la belleza, el horror, el deseo, el miedo, el lujo, la
            paranoia y el placer. Guillermo Lorca (Guillermo Lorca
            García-Huidobro) es un artista contemporáneo de Santiago de Chile
            que está arrasando en el mundo del arte. Moco Museum Barcelona se
            enorgullece de presentar la exposición «Esplendor de la noche», la
            primera exposición individual en Europa del pintor con influencias
            realistas y románticas.
          </p>
          <img className="images-news" src={lorcaExpo} alt="" />
        </div>
        <br />
        <h2 className="description-title">
          COLOMBIA DESPIDE CON HONORES A BOTERO, EL ARTISTA AL QUE GARCÍA
          MÁRQUEZ LE CAÍA "GORDO"
        </h2>
        <div className="container-news">
          <img className="images-news" src={botero} alt="" />
          <p>
            Al pintor y escultor, maestro de las popularmente conocidas como
            "figuras gordas", le caía precisamente «gordo» el otro gran artista
            colombiano, el Nobel Gabriel García Márquez. Ideológica y
            políticamente eran antagónicos.Artísticamente a Fernando le
            señalaron como deudor del realismo mágico y eso le enfadó: «Yo tenía
            una manera de expresarme diez años antes de que apareciera Cien años
            de soledad. Desde el 57 yo pintaba Boteros, pintaba mi mundo, toda
            esa realidad desproporcionada, exagerada, yo la había hecho antes.En
            los 60 ambos colaboraron en el diario El Tiempo, García Márquez
            publicó un cuento y Botero lo ilustró: «Yo hice una ilustración
            loquísima, y a él le gustó mucho, y a El Tiempo también le gustó»,
            explicó, pero aquello fue una excepción en un trato que fue a peor
            con el tiempo.
          </p>
        </div>
        <br />
      </section>
    </div>
  );
};

export default Noticias;
