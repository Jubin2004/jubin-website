// import "./App.css";
import "./AppListGroup.css";
import { Background1, Background2 } from "./Background";
import Scroll from "./components/Scroll";

/// Function for ListGroup usage
function AppListGroup() {
  return (
    <div className="Parent-container">
      <Background1 />
      <Background2 />
      <div className="Column-container">
        <div className="Title my-font">The story of This World:</div>
        <Scroll
          class="Box-container my-font"
          children="So this baby was kinda born right:"
        ></Scroll>
        <Scroll
          class="vl"
        ></Scroll>
        <Scroll
          class="Box-container my-font"
          children="So this baby was kinda born right:"
        ></Scroll>
        <Scroll
          class="vl"
        ></Scroll>
        <Scroll
          class="Box-container my-font"
          children="So this baby was kinda born right:"
        ></Scroll>
      </div>
    </div>
  );
}

export default AppListGroup;
