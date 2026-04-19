import { useState, useRef } from "react";
import "./AppListGroup.css";
import arrow from "./components/pics/frutaer/frutiger_arrow_down.png";
import baby_pic from "./components/pics/storyline/baby_jubin.jpg";
import strand from "./components/pics/storyline/strand.jpg";
import osv from "./components/pics/storyline/osv.jpg";
import ah from "./components/pics/storyline/ah_duim.jpg";
import gym from "./components/pics/storyline/gym_duim.jpg";
import selfie_uni from "./components/pics/storyline/selfie_uni.jpeg";
import paraplu from "./components/pics/storyline/paraplu.mp4";
import jjk from "./components/pics/storyline/jjk.jpeg";
import mic from "./components/pics/storyline/mic.jpeg";
import olifant from "./components/pics/storyline/olifant.jpeg";
import bolderen from "./components/pics/storyline/bolderen.jpeg";


function generateStripes() {
  const colors = [
    'rgba(255,255,255,0.95)',
    'rgba(79,195,220,0.8)',
    'rgba(80,180,230,0.7)',
    'rgba(140,210,245,0.6)',
    'rgba(255,255,255,0.5)',
    'rgba(169,57,173,0.3)',
  ];
  return Array.from({ length: 35 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    width: `${Math.floor(Math.random() * 900) + 300}px`,
    height: `${Math.floor(Math.random() * 3) + 1}px`,
    delay: `${Math.random() * 0.15}s`,
    duration: `${0.3 + Math.random() * 0.4}s`,
    opacity: i < 5 ? 0.95 : Math.random() * 0.5 + 0.3,
    color: colors[i % colors.length],
    blur: i % 4 === 0 ? '3px' : '0px',
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
      <div className="date-pill">05-05-2004</div>
    </div>,
    <div className="Box-container my-font">
      <div>A shy kid, but also very curious about the world around him. Trying to grasp as much of it as he possibly can.</div>
      <div>
        <img className="pic-in-cont" src={osv} />
        <img className="pic-in-cont" src={strand} />
      </div>
      <div className="date-pill">2004 - 2016</div>
    </div>,
    <div className="Box-container my-font">
      <div>Getting older, slowly building his own identity. Evaluating what he likes and what he doesn't. What he wants to build his own life around.</div>
      <div>
        <img className="pic-in-cont" src={ah} />
        <img className="pic-in-cont" src={gym} />
      </div>
      <div className="date-pill">2016 - 2022</div>
    </div>,
    <div className="Box-container my-font">
      <div>Entering the student life, he explores the Computer Science bachelor at the UvA.</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className="pic-in-cont" src={selfie_uni} />
        <video className="pic-in-cont" src={paraplu} autoPlay loop muted />
      </div>
      <div className="date-pill">2023 - 2025</div>
    </div>,
    <div className="Box-container Box-container--lg my-font">
      <div>At the same time he never forgot the importance of 'side quests'.</div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <img className="pic-in-cont pic-in-cont--lg" src={jjk} />
        <img className="pic-in-cont pic-in-cont--lg" src={mic} />
        <img className="pic-in-cont pic-in-cont--lg" src={olifant} />
        <img className="pic-in-cont pic-in-cont--lg" src={bolderen} />
      </div>
      <div></div>
    </div>,
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
                animationDuration: s.duration,
                background: s.color,
                filter: `blur(${s.blur})`,
                boxShadow: `0 0 6px ${s.color}, 0 0 12px ${s.color}`,
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
