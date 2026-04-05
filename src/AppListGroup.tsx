import { useState } from "react";
import "./AppListGroup.css";
import baby_pic from "./components/pics/storyline/baby_jubin.jpg";
import suikerspin from "./components/pics/storyline/suikerspin.jpg";
import strand from "./components/pics/storyline/strand.jpg";
import osv from "./components/pics/storyline/osv.jpg";
import ah from "./components/pics/storyline/ah_duim.jpg";
import gym from "./components/pics/storyline/gym_duim.jpg";

function AppListGroup() {
  const [current, setCurrent] = useState(0);

  const slides = [
    <div className="Box-container my-font">
      <div>On a valued day in Amsterdam, The Netherlands, a baby was born:</div>
      <div><img className="pic-in-cont-big" src={baby_pic} /></div>
      05-05-2004
    </div>,
    <div className="Box-container my-font">
      <div>A shy kid, but also very curious about the world around him. Trying to grasp as much of it as he possibly can.</div>
      <div>
        <img className="pic-in-cont" src={suikerspin} />
        <img className="pic-in-cont" src={osv} />
        <img className="pic-in-cont" src={strand} />
      </div>
      2004 - 2016
    </div>,
    <div className="Box-container my-font">
      <div>Getting older, slowly building his own identity. Evaluating what he likes and what he doesn't. What he wants to build his own life around.</div>
      <div>
        <img className="pic-in-cont" src={ah} />
        <img className="pic-in-cont" src={gym} />
      </div>
      <div>2016 - 2022</div>
    </div>,
    <div className="Box-container my-font"></div>,
  ];

  return (
    <div className="Parent-container">
      <h1 className="Title my-font">The story of This World:</h1>
      <div className="carousel-wrapper">
        <button
          className="carousel-btn"
          onClick={() => setCurrent(c => c - 1)}
          style={{ visibility: current === 0 ? "hidden" : "visible" }}
        >
          &#8592;
        </button>
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="carousel-slide">{slide}</div>
            ))}
          </div>
        </div>
        <button
          className="carousel-btn"
          onClick={() => setCurrent(c => c + 1)}
          style={{ visibility: current === slides.length - 1 ? "hidden" : "visible" }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default AppListGroup;
