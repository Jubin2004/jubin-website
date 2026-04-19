import AppListGroup from "./AppListGroup";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";
import Game from "./Game";
import Form from "./Php";
import PlaneSeats from "./PlaneSeats";
import HomeButton from "./components/HomeButton";
import LoadingScreen from "./components/LoadingScreen";
import SoundControl from "./components/SoundControl";
import arrow from "./components/pics/frutaer/frutiger_arrow_down.png";

export const NavContext = createContext<(path: string) => void>(() => {});
export function useGoTo() { return useContext(NavContext); }

function Home({ onLoaded }: { onLoaded: () => void }) {
  const goTo = useGoTo();
  const [fading, setFading] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("visited");
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!loading) {
      onLoaded();
      return;
    }
    try { sessionStorage.setItem("visited", "true"); } catch {}
    const fadeTimer = setTimeout(() => setFading(true), 1500);
    const doneTimer = setTimeout(() => { setLoading(false); onLoaded(); }, 2000);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  return (
    <>
    {loading && <LoadingScreen fading={fading} />}
    <div className="Top-container">
      <h1 className="Top">Welcome to my world.</h1>
      <h1 className="Under-Top">~Jubin Gafur</h1>
      <div className="Plane" onMouseEnter={() => setHovered('plane')} onMouseLeave={() => setHovered(null)} onClick={() => goTo('/PlaneSeats')} style={{ cursor: 'pointer' }}>
        {hovered === 'plane' && (
          <div className="arrow-tooltip">
            <div className="arrow-tooltip-label">Plane Seats</div>
            <div className="arrow-tooltip-sub">Choose your seat</div>
          </div>
        )}
        <img src={arrow}/>
      </div>
      <div className="Bubble" onMouseEnter={() => setHovered('bubble')} onMouseLeave={() => setHovered(null)} onClick={() => goTo('/Game')} style={{ cursor: 'pointer' }}>
        {hovered === 'bubble' && (
          <div className="arrow-tooltip">
            <div className="arrow-tooltip-label">Movement Game</div>
            <div className="arrow-tooltip-sub">Toby fox?</div>
          </div>
        )}
        <img src={arrow}/>
      </div>
      <div className="City" onMouseEnter={() => setHovered('city')} onMouseLeave={() => setHovered(null)} onClick={() => goTo('/')} style={{ cursor: 'pointer' }}>
        {hovered === 'city' && (
          <div className="arrow-tooltip">
            <div className="arrow-tooltip-label">Coming soon</div>
            <div className="arrow-tooltip-sub">Stay tuned</div>
          </div>
        )}
        <img src={arrow}/>
      </div>
    </div>
    </>
  );
}

function App() {
  const [showUI, setShowUI] = useState(() => {
    try {
      return !!sessionStorage.getItem("visited") || window.location.pathname !== "/";
    } catch {
      return true;
    }
  });
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  function goTo(path: string) {
    setTransitioning(true);
    setTimeout(() => {
      navigate(path);
      setTransitioning(false);
    }, 200);
  }

  return (
    <NavContext.Provider value={goTo}>
      <SoundControl hidden={!showUI} />
      {showUI && <HomeButton />}
      <div className={transitioning ? 'page-out' : 'page-in'} style={{ position: 'fixed', inset: 0 }}>
        <Routes>
          <Route path="/" element={<Home onLoaded={() => setShowUI(true)} />} />
          <Route path="/AppListGroup" element={<AppListGroup />} />
          <Route path="/PlaneSeats" element={<PlaneSeats />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Php" element={<Form />} />
        </Routes>
      </div>
    </NavContext.Provider>
  );
}

export default App;
