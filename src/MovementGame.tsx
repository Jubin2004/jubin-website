import { useState, useEffect } from "react";
import "./MovementGame.css";
import "./App.css";
import dogRight from "./components/pics/dogs/dog_right.png";
import dogLeft from "./components/pics/dogs/dog_left.png";
import dogUp from "./components/pics/dogs/dog_up.png";
import dogDown from "./components/pics/dogs/dog_down.png";
import aKey from "./components/pics/controls/a_key.png";
import wKey from "./components/pics/controls/w_key.png";
import dKey from "./components/pics/controls/d_key.png";
import sKey from "./components/pics/controls/s_key.png";

// Game area: 1000×600px, dog: 50×50px
// x: -50 (fully off left) to 1000 (fully off right)
// y: -50 (fully off top)  to 600  (fully off bottom)

export default function MovementGame() {
  const [pos, setPos] = useState({ x: 0, y: 0, noTransition: false });
  const [dogImg, setDogImg] = useState(dogRight);

  // Re-enable transition after the wrap frame renders
  useEffect(() => {
    if (pos.noTransition) {
      const raf = requestAnimationFrame(() =>
        setPos((p) => ({ ...p, noTransition: false }))
      );
      return () => cancelAnimationFrame(raf);
    }
  }, [pos.noTransition]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPos((prev) => {
        let newX = prev.x;
        let newY = prev.y;
        let noTransition = false;

        switch (event.key) {
          case "w":
            newY = prev.y - 20;
            setDogImg(dogUp);
            if (newY <= -50) { newY = 600; noTransition = true; }
            break;
          case "s":
            newY = prev.y + 20;
            setDogImg(dogDown);
            if (newY >= 600) { newY = -50; noTransition = true; }
            break;
          case "a":
            newX = prev.x - 20;
            setDogImg(dogLeft);
            if (newX <= -50) { newX = 1000; noTransition = true; }
            break;
          case "d":
            newX = prev.x + 20;
            setDogImg(dogRight);
            if (newX >= 1000) { newX = -50; noTransition = true; }
            break;
          default:
            return prev;
        }
        return { x: newX, y: newY, noTransition };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <div className="game-area">
        <div
          className="player"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transition: pos.noTransition ? "none" : undefined,
          }}
        >
          <img src={dogImg} />
        </div>
      </div>
      <div className="controls-container">
        <div className="controls">
          <img src={wKey} />
          <div className="controls-row">
            <img src={aKey} />
            <img src={sKey} />
            <img src={dKey} />
          </div>
        </div>
      </div>
      <div className="coordinates-container">
        <div className="coordinates my-font">
          x: {pos.x}, y: {pos.y}
        </div>
      </div>
    </div>
  );
}
