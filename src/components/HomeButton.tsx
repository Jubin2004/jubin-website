import { Link } from "react-router-dom";
import "./HomeButton.css";
import dog_right from "./pics/dogs/dog_right.png";

export default function HomeButton() {
  return (
    <Link to="/" className="home-btn">
      <span className="home-btn-spinner">
        <img src={dog_right} alt="home" className="home-btn-img" />
      </span>
    </Link>
  );
}
