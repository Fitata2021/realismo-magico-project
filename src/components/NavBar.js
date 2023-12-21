import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import butterfly from "../images/couple-game-images/picmix.com_1899742.gif";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuToogle, setMenuToogle] = useState(false);

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
                setMenuToogle(false);
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
              setMenuToogle(false);
            }}
          >
            Inicio
          </li>
          <li
            onClick={() => {
              navigate("/artists");
              setMenuToogle(false);
            }}
          >
            Artistas
          </li>
          <li
            onClick={() => {
              navigate("/tests");
              setMenuToogle(false);
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
              setMenuToogle(false);
            }}
          >
            Juegos
          </li>
          <li
            onClick={() => {
              navigate("/news");
              setMenuToogle(false);
            }}
          >
            Noticias
          </li>
          <li
            onClick={() => {
              navigate("/more");
              setMenuToogle(false);
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
