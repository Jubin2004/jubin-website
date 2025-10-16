import AppListGroup from "./AppListGroup";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Background1, Background2 } from "./Background";
import MovementGame from "./MovementGame";
import Game from "./Game";

function Home() {
  return (
    <div>
      <div className="Top-container">
        <Background1 />
        <Background2 />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="Top my-font">Welcome to my world.</p>
          <p className="Under-Top my-font">~Jubin Gafur</p>
          <div className="Link-container">
            <Link className="Further my-font" to="/components/Background">
              Test me pls
            </Link>
          </div>
          <div className="Link-container">
            <Link className="Further my-font" to="/AppListGroup">
              Ssssshhhh. Find out more about my world.
            </Link>
          </div>
          <div className="Link-container">
            <Link className="Further my-font" to="/Game">
              Wanna play a little game?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components/Background" element={<Background1 />} />
      <Route path="/AppListGroup" element={<AppListGroup />} />
      <Route path="/Game" element={<Game />} />
    </Routes>
  );
}

export default App;
