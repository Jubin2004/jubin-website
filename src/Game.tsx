import MovementGame from "./MovementGame";
import "./MovementGame.css";
import { Background1, Background2 } from "./Background";
import "./App.css";
import { PageHeight } from "./components/PageHeight";

export default function Game() {
  const pageHeight = PageHeight();
  
  return (
    <div style={{ overflow: "hidden", minHeight: "100vh", position: "relative" }}>
      <Background1 windowHeight={`${pageHeight}px`} />
      <Background2 windowHeight={pageHeight} />
      <div className="Game-container">
        <h1 className="Top game-font">Toby Fox</h1>
        <br/>
        <MovementGame />
      </div>
    </div>
  );
}
