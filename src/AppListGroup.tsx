import { useState, useRef } from "react";
import "./AppListGroup.css";
import arrow from "./components/pics/frutaer/frutiger_arrow_down.png";
import baby_pic from "./components/pics/storyline/baby_jubin.jpg";
import strand from "./components/pics/storyline/strand.jpg";
import osv from "./components/pics/storyline/osv.jpg";
import ah from "./components/pics/storyline/ah_duim.jpg";
import gym from "./components/pics/storyline/gym_duim.jpg";

function generateStripes() {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    width: `${Math.floor(Math.random() * 500) + 200}px`,
    height: `${Math.floor(Math.random() * 4) + 2}px`,
    delay: `-${Math.floor(Math.random() * 750)}ms`,
    opacity: Math.random() * 0.4 + 0.3,
  }));
}

function AppListGroup() {
  const [current, setCurrent] = useState(0);
  const [blurring, setBlurring] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [stripes, setStripes] = useState(generateStripes());
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function navigateTo(next: number) {
    setStripes(prev => blurring ? [...prev, ...generateStripes()] : generateStripes());
    setDirection(next > current ? 'right' : 'left');
    setBlurring(true);
    setCurrent(next);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setBlurring(false), 800);
  }

  const slides = [
    <div className="Box-container my-font">
      <div>On a valued day in Amsterdam, The Netherlands, a baby was born:</div>
      <div><img className="pic-in-cont-big" src={baby_pic} /></div>
      05-05-2004
    </div>,
    <div className="Box-container my-font">
      <div>A shy kid, but also very curious about the world around him. Trying to grasp as much of it as he possibly can.</div>
      <div>
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
      <div className="bg-layer" style={{ filter: blurring ? "blur(12px)" : "blur(0px)" }} />
      {blurring && (
        <div className="stripes-container">
          {stripes.map(s => (
            <span
              key={s.id}
              className={`speed-stripe speed-stripe-${direction}`}
              style={{
                top: s.top,
                width: s.width,
                height: s.height,
                opacity: s.opacity,
                animationDelay: s.delay,
              }}
            />
          ))}
        </div>
      )}
      <h1 className="Title">The story of This World.</h1>
      <div className="carousel-wrapper">
        <button
          className="carousel-btn"
          onClick={() => navigateTo(current - 1)}
          style={{ visibility: current === 0 ? "hidden" : "visible" }}
        >
          <img src={arrow} className="carousel-arrow carousel-arrow-left" />
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
          onClick={() => navigateTo(current + 1)}
          style={{ visibility: current === slides.length - 1 ? "hidden" : "visible" }}
        >
          <img src={arrow} className="carousel-arrow carousel-arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default AppListGroup;
