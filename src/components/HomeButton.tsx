import { useGoTo } from "../App";
import "./HomeButton.css";
import dog_right from "./pics/dogs/dog_right.png";

export default function HomeButton() {
  const goTo = useGoTo();
  return (
    <div className="home-btn" onClick={() => goTo('/')} style={{ cursor: 'pointer' }}>
      <span className="home-btn-spinner">
        <img src={dog_right} alt="home" className="home-btn-img" />
      </span>
    </div>
  );
}
