import AppListGroup from "./AppListGroup";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Game from "./Game";
import Form from "./Php";
import PlaneSeats from "./PlaneSeats";
import HomeButton from "./components/HomeButton";
import LoadingScreen from "./components/LoadingScreen";
import SoundControl from "./components/SoundControl";
import arrow from "./components/pics/frutaer/frutiger_arrow_down.png";

function Home() {
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("visited");
    } catch {
      return true;
    }
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    try { sessionStorage.setItem("visited", "true"); } catch {}
    const fadeTimer = setTimeout(() => setFading(true), 1500);
    const doneTimer = setTimeout(() => setLoading(false), 2000);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  return (
    <>
    {loading && <LoadingScreen fading={fading} />}
    <div className="Top-container">
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className="Top">Welcome to my world.</h1>
        <h1 className="Under-Top">~Jubin Gafur</h1>
        <Link className="Plane" to="/PlaneSeats">
          <img src={arrow}/>
        </Link>
        <br />
        <Link className="Bubble" to="/Game">
          <img src={arrow}/>
        </Link>
        <br />
        <Link className="City" to="/">
          <img src={arrow}/>
        </Link>
      </div>
    </div>
    </>
  );
}

function App() {
  return (
    <>
    <SoundControl />
    <HomeButton />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AppListGroup" element={<AppListGroup />} />
      <Route path="/PlaneSeats" element={<PlaneSeats />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/Php" element={<Form />} />
    </Routes>
    </>
  );
}

export default App;
