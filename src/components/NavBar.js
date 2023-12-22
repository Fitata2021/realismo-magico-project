import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import butterfly from "../images/couple-game-images/picmix.com_1899742.gif";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuToogle, setMenuToogle] = useState(window.innerWidth > 750);

  useEffect(() => {
    const handleResize = () => {
      setMenuToogle(window.innerWidth > 750);
    };
    window.addEventListener("resize", handleResize);
    // Eliminar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showMenu = () => {
    setMenuToogle((prevMenuToogle) => !prevMenuToogle);
  };

  return (
    <div>
      <nav className="nav-bar">
        <ul className="title">
          <i className="fa-solid fa-bars" onClick={showMenu}></i>
          <li className="title1">REALISMO </li>
          <div className="space-nav"></div>
          <li className="image-center-nav">
            <img
              onClick={() => {
                navigate("/");
              }}
              src={butterfly}
              alt="flying butterfly"
            />
          </li>
          <li className="title2">MÁGICO&nbsp;&nbsp;</li>
        </ul>
        <div className="subtitles">
          <p className="subtitle">ARTES PLÁSTICAS</p>
          <div className="space-nav"></div>
          <p className="subtitle">LATINOAMERICA&nbsp;</p>
        </div>
      </nav>
      <nav
        className="nav-options"
        style={{ display: menuToogle ? "block" : "none" }}
      >
        <ul>
          <li
            onClick={() => {
              navigate("/");
              setMenuToogle(window.innerWidth > 750);
            }}
          >
            Inicio
          </li>
          <li
            onClick={() => {
              navigate("/artists");
              setMenuToogle(window.innerWidth > 750);
            }}
          >
            Artistas
          </li>
          <li
            onClick={() => {
              navigate("/tests");
              setMenuToogle(window.innerWidth > 750);
            }}
          >
            Tests
          </li>

          <li className="space-between-options">
            <div className="space-nav"></div>
          </li>
          <li
            onClick={() => {
              navigate("/games");
              setMenuToogle(window.innerWidth > 750);
            }}
          >
            Juegos
          </li>
          <li
            onClick={() => {
              navigate("/news");
              setMenuToogle(window.innerWidth > 750);
            }}
          >
            Noticias
          </li>
          <li
            onClick={() => {
              navigate("/more");
              setMenuToogle(window.innerWidth > 750);
            }}
          >
            Más
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
