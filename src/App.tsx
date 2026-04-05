import AppListGroup from "./AppListGroup";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Game from "./Game";
import Form from "./Php";
import arrow from "./components/pics/frutaer/frutiger_arrow_down.png";

function Home() {
  return (
    <div className="Top-container">
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className="Top my-font">Welcome to my world.</h1>
        <h1 className="Under-Top my-font">~Jubin Gafur</h1>
        <Link className="Plane my-font" to="/AppListGroup">
          <img src={arrow}/>
        </Link>
        <br />
        <Link className="Bubble my-font" to="/Game">
          <img src={arrow}/>
        </Link>
        <br />
        <Link className="City my-font" to="/">
          <img src={arrow}/>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AppListGroup" element={<AppListGroup />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/Php" element={<Form />} />
    </Routes>
  );
}

export default App;
