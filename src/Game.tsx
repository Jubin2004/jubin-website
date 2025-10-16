import MovementGame from "./MovementGame";
import {Background1, Background2} from "./Background";
import "./App.css";

export default function Game() {
  return (
    <div className="Top-container">
      <div className="Top my-font">
      Toby Fox
      </div>
      <Background1 />
      <Background2 />
      <MovementGame />
    </div>
  );
}
