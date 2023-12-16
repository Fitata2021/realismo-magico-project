import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import butterfly from "../images/couple-game-images/picmix.com_1899742.gif";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="nav-bar">
        <ul className="title">
          <li className="title1">REALISMO </li>
          <div className="space-nav"></div>
          <li>
            <img
              onClick={() => navigate("/")}
              src={butterfly}
              alt="flying butterfly"
            />
          </li>
          <li className="title2">MAGICO&nbsp;&nbsp;</li>
        </ul>
        <div className="subtitles">
          <p className="subtitle">ARTES PLÁSTICAS</p>
          <div className="space-nav"></div>
          <p className="subtitle">LATINOAMERICA&nbsp;</p>
        </div>
      </nav>
      <nav className="nav-options">
        <ul>
          <li onClick={() => navigate("/")}>Inicio</li>
          <li onClick={() => navigate("/artists")}>Artistas</li>
          <li onClick={() => navigate("/tests")}>Tests</li>

          <li>
            <div className="space-nav"></div>
          </li>
          <li onClick={() => navigate("/games")}>Juegos</li>
          <li onClick={() => navigate("/news")}>Noticias</li>
          <li onClick={() => navigate("/more")}>Más</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
