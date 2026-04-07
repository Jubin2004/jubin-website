import "./LoadingScreen.css";
import dogRight from "./pics/dogs/dog_right.png";

export default function LoadingScreen({ fading }: { fading: boolean }) {
  return (
    <div className={`loading-screen${fading ? " loading-fading" : ""}`}>
      <div className="loading-orb">
        <div className="loading-ring"></div>
        <div className="loading-ring loading-ring-2"></div>
        <span className="loading-dog-spinner">
          <img src={dogRight} alt="loading" className="loading-dog" />
        </span>
      </div>
    </div>
  );
}
