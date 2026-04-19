import { useState } from "react";
import { Link } from "react-router-dom";
import "./PlaneSeats.css";
import arrow from "./components/pics/frutaer/frutiger_arrow_down.png";
import seatsBg from "./components/pics/frutaer/plane_seats.jpg";

export default function PlaneSeats() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="seats-container" style={{ backgroundImage: `url(${seatsBg})` }}>
      <h1 className="seats-title">Which seat are you choosing.</h1>
      <div className="seat-arrow seat-arrow-1" onMouseEnter={() => setHovered('a')} onMouseLeave={() => setHovered(null)}>
        {hovered === 'a' && (
          <div className="arrow-tooltip">
            <div className="arrow-tooltip-label">Window Seat</div>
            <div className="arrow-tooltip-sub">Best view</div>
          </div>
        )}
        <Link to="/AppListGroup"><img src={arrow} /></Link>
      </div>
      <div className="seat-arrow seat-arrow-2" onMouseEnter={() => setHovered('b')} onMouseLeave={() => setHovered(null)}>
        {hovered === 'b' && (
          <div className="arrow-tooltip">
            <div className="arrow-tooltip-label">Middle Seat</div>
            <div className="arrow-tooltip-sub">Classic choice</div>
          </div>
        )}
        <Link to="#"><img src={arrow} /></Link>
      </div>
      <div className="seat-arrow seat-arrow-3" onMouseEnter={() => setHovered('c')} onMouseLeave={() => setHovered(null)}>
        {hovered === 'c' && (
          <div className="arrow-tooltip">
            <div className="arrow-tooltip-label">Aisle Seat</div>
            <div className="arrow-tooltip-sub">Easy access</div>
          </div>
        )}
        <Link to="#"><img src={arrow} /></Link>
      </div>
    </div>
  );
}
