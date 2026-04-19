import { useState } from "react";
import { useGoTo } from "./App";
import "./PlaneSeats.css";
import arrow from "./components/pics/frutaer/frutiger_arrow_down.png";
import seatsBg from "./components/pics/frutaer/plane_seats.jpg";

export default function PlaneSeats() {
  const goTo = useGoTo();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="seats-container" style={{ backgroundImage: `url(${seatsBg})` }}>
      <h1 className="seats-title">Which seat are you choosing.</h1>
      <div className="seat-arrow seat-arrow-1" onMouseEnter={() => setHovered('a')} onMouseLeave={() => setHovered(null)} onClick={() => goTo('/AppListGroup')} style={{ cursor: 'pointer' }}>
        {hovered === 'a' && (
          <div className="arrow-tooltip">
            <div className="arrow-tooltip-label">Window Seat</div>
            <div className="arrow-tooltip-sub">Best view</div>
          </div>
        )}
        <img src={arrow} />
      </div>
      <div className="seat-arrow seat-arrow-2" onMouseEnter={() => setHovered('b')} onMouseLeave={() => setHovered(null)} onClick={() => goTo('#')} style={{ cursor: 'pointer' }}>
        {hovered === 'b' && (
          <div className="arrow-tooltip">
            <div className="arrow-tooltip-label">Middle Seat</div>
            <div className="arrow-tooltip-sub">Classic choice</div>
          </div>
        )}
        <img src={arrow} />
      </div>
      <div className="seat-arrow seat-arrow-3" onMouseEnter={() => setHovered('c')} onMouseLeave={() => setHovered(null)} onClick={() => goTo('#')} style={{ cursor: 'pointer' }}>
        {hovered === 'c' && (
          <div className="arrow-tooltip">
            <div className="arrow-tooltip-label">Aisle Seat</div>
            <div className="arrow-tooltip-sub">Easy access</div>
          </div>
        )}
        <img src={arrow} />
      </div>
    </div>
  );
}
