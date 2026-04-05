import { Link } from "react-router-dom";
import "./PlaneSeats.css";
import arrow from "./components/pics/frutaer/frutiger_arrow_down.png";
import seatsBg from "./components/pics/frutaer/plane_seats.jpg";

export default function PlaneSeats() {
  return (
    <div className="seats-container" style={{ backgroundImage: `url(${seatsBg})` }}>
      <h1 className="seats-title">Which seat are you choosing.</h1>
      <Link className="seat-arrow seat-arrow-1" to="/AppListGroup">
        <img src={arrow} />
      </Link>
      <Link className="seat-arrow seat-arrow-2" to="#">
        <img src={arrow} />
      </Link>
      <Link className="seat-arrow seat-arrow-3" to="#">
        <img src={arrow} />
      </Link>
    </div>
  );
}
