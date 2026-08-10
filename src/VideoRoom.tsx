import { useState } from "react";
import "./VideoRoom.css";

const CORRECT_PASSWORD = import.meta.env.VITE_VIDEO_PASSWORD;
const VIDEO_ID = import.meta.env.VITE_YOUTUBE_VIDEO_ID;

export default function VideoRoom() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setUnlocked(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  }

  return (
    <div className="video-room-container">
      {!unlocked ? (
        <form
          className={`video-lock-panel${shake ? " shake" : ""}`}
          onSubmit={handleSubmit}
        >
          <div className="video-lock-icon">🔒</div>
          <p className="video-lock-label">Wat is de manier waarop je een chick in Kyrgyzstan geregeld had?</p>
          <p className="video-lock-label">Hint: Het zijn 2 woorden in 1.</p>
          <p className="video-lock-label">Vul het wachtwoord in:</p>
          <input
            className="video-lock-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
          />
          <button className="video-lock-button" type="submit">
            Unlock
          </button>
        </form>
      ) : (
        <div className="video-frame-panel">
          <iframe
            className="video-frame"
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
