import "./LoadingScreen.css";

export default function LoadingScreen({ fading }: { fading: boolean }) {
  return (
    <div className={`loading-screen${fading ? " loading-fading" : ""}`}>
      <div className="loading-orb">
        <div className="loading-ring"></div>
        <div className="loading-ring loading-ring-2"></div>
        <div className="loading-core"></div>
      </div>
    </div>
  );
}
