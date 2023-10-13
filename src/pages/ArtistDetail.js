import { Link, useParams } from "react-router-dom";
import ArtistData from "../utils/ArtistData";
import "../styles/ArtistDetail.css";
import { useEffect } from "react";

const ArtistDetail = () => {
  const { id } = useParams();
  const artist = ArtistData.find((artist) => artist.id === parseInt(id));
  console.log(id);
  console.log(artist);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="artistdetail">
      <h1 className="artist-title">{artist.name}</h1>
      <section className="card-artistdetail">
        <img className="image-artistdetail" src={artist.img} alt="" />

        <ul className="info-artistdetail">
          <li>
            <p className="info-items">
              <strong>Nacionalidad: </strong> {artist.country}
            </p>
          </li>
          <li>
            <p className="info-items">
              <strong>Sitio-Web: </strong>
              <Link to={artist.webSite} target="_blank">
                {artist.webSite}
              </Link>
            </p>
          </li>
          <li>
            <p className="info-items">
              <strong>Estado: </strong> {artist.estado}
            </p>
          </li>
          <li>
            <p className="info-items">
              <strong>Nacionalidad: </strong> {artist.country}
            </p>
          </li>
          <p>{artist.bio}</p>
        </ul>
      </section>
      <section className="artist-video">
        <iframe
          width="100%"
          height="400"
          src={artist.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
      <h2 className="artist-subtitle">Obras</h2>
      <p className="artworks-presentation">Algunas obras del artista:</p>
      <section className="artworks-section">
        {artist.artworks.map((artwork) => (
          <div className="artworks">
            <img src={artwork} alt="" key={artwork} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default ArtistDetail;
