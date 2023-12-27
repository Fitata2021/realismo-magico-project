import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Home,
  Artistas,
  ArtistDetail,
  Tests,
  Juegos,
  Noticias,
  Mas,
} from "./pages";
import {
  CouplesGame,
  NavBar,
  Footer,
  QuestionsTest,
  Puzzle,
  BooleanTest,
  VisualTest,
  ArtworkCanvas,
} from "./components";

function App() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setShowScrollIcon(true);
      } else {
        setShowScrollIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artistas />} />
          <Route path="/artist/:id" element={<ArtistDetail />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/games" element={<Juegos />} />
          <Route path="/news" element={<Noticias />} />
          <Route path="/more" element={<Mas />} />
          <Route path="/couples-game" element={<CouplesGame />} />
          <Route path="/questions-test" element={<QuestionsTest />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/boolean-test" element={<BooleanTest />} />
          <Route path="/visual-test" element={<VisualTest />} />
          <Route
            path="/canvas"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
            element={<ArtworkCanvas />}
          />
        </Routes>
        {showScrollIcon && (
          <div className="go-up-icon" onClick={scrollToTop}>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        )}
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
