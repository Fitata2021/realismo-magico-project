import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
// import butterfly from "../images/utils-images/picmix.com_1899742.gif";

const butterfly =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/a41b14be-44d1-4054-dadb-b17b3f402d00/public";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuToogle, setMenuToogle] = useState(window.innerWidth > 750);
  const navOptionsRef = useRef(null);
  const menuRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (window.innerWidth <= 750) {
      if (
        navOptionsRef.current &&
        !navOptionsRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuToogle(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const showMenu = () => {
    setMenuToogle((prevMenuToogle) => !prevMenuToogle);
  };

  return (
    <div>
      <nav className="nav-bar">
        <ul className="title">
          <i className="fa-solid fa-bars" onClick={showMenu} ref={menuRef}></i>
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
        ref={navOptionsRef}
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
