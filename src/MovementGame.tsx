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

export default function MovementGame() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dogImg, setDogImg] = useState(dogRight);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        switch (event.key) {
          case "w":
            if (newY > 0) {
              newY = newY - 20;
              setDogImg(dogUp);
            }
            break;
          case "s":
            if (newY < 540) {
              newY = newY + 20;
              setDogImg(dogDown);
            }
            break;
          case "a":
            if (newX > 0) {
              newX = newX - 20;
              setDogImg(dogLeft);
            }
            break;
          case "d":
            if (newX < 940) {
              newX = newX + 20;
              setDogImg(dogRight);
            }
            break;
          default:
            return prev;
        }
        return { x: newX, y: newY };
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
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <img src={dogImg}></img>
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
          x: {position.x}, y: {position.y}
        </div>
      </div>
    </div>
  );
}
