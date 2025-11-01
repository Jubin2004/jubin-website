import MovementGame from "./MovementGame";
import { Background1, Background2 } from "./Background";
import "./App.css";
import { PageHeight } from "./components/PageHeight";

export default function Game() {
  const pageHeight = PageHeight();
  
  return (
    <div>
      <Background1 windowHeight={`${pageHeight}px`} />
      <Background2 windowHeight={pageHeight} />
      <div className="Game-container">
        <div className="Top game-font">Toby Fox</div>

        <MovementGame />
      </div>
    </div>
  );
}
