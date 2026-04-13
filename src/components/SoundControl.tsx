import { useRef, useState, useEffect } from "react";
import "./SoundControl.css";
import lease from "./sounds/LEASE by Takeshi Abo but slightly bitcrushed for nostalgia.mp3";
import clickSfx from "./sounds/Mouse Click Sound Effect.mp3";

export default function SoundControl() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(1);
  const prevVolumeRef = useRef(1);

  const toggleMute = () => {
    if (volume > 0) {
      prevVolumeRef.current = volume;
      setVolume(0);
      if (audioRef.current) audioRef.current.volume = 0;
    } else {
      const v = prevVolumeRef.current || 1;
      setVolume(v);
      if (audioRef.current) audioRef.current.volume = v;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  useEffect(() => {
    const click = new Audio(clickSfx);
    click.preload = "auto";
    click.volume = 0.05;

    const handleArrowClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" && (target as HTMLImageElement).src.includes("frutiger_arrow")) {
        click.currentTime = 0;
        click.play();
      }
    };
    document.addEventListener("click", handleArrowClick);
    return () => document.removeEventListener("click", handleArrowClick);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch(() => {
      const unlock = () => {
        audio.play();
        window.removeEventListener("click", unlock);
        window.removeEventListener("keydown", unlock);
      };
      window.addEventListener("click", unlock);
      window.addEventListener("keydown", unlock);
    });
  }, []);

  return (
    <>
      <audio ref={audioRef} src={lease} loop />
      <div className="sound-control">
        <button className="mute-btn" onClick={toggleMute}>
          {volume === 0 ? "🔇" : "🔊"}
        </button>
        <div className="sound-bar-wrapper">
          <div className="sound-bar">
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      </div>
    </>
  );
}
