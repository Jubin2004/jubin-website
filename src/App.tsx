import AppListGroup from "./AppListGroup";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Background1, Background2 } from "./Background";
import Game from "./Game";
import { PageHeight } from "./components/PageHeight";
import Form from "./Php";
import arrow from "./components/pics/frutaer/frutiger_arrow_down.png";
import frutiger_city from "./components/pics/frutaer/frutiger_cutout_2.png";

function Home() {
  const pageHeight = PageHeight();

  return (
    <div className="Top-container">
      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="Top my-font">Welcome to my world.</p>
        <p className="Under-Top my-font">~Jubin Gafur</p>
        <Link className="Plane my-font" to="/AppListGroup">
          <a><img src={arrow}/></a>
        </Link>
        <br />
        <Link className="Bubble my-font" to="/Game">
          <a><img src={arrow}/></a>
        </Link>
        <br />
        <Link className="City my-font" to="/">
          <a><img src={arrow}/></a>
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
