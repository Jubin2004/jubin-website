// import "./App.css";
import "./AppListGroup.css";
import { Background1, Background2 } from "./Background";
import Scroll from "./components/Scroll";
import { PageHeight } from "./components/PageHeight";

import baby_pic from "./components/pics/storyline/baby_jubin.jpg";
import suikerspin from "./components/pics/storyline/suikerspin.jpg";
import strand from "./components/pics/storyline/strand.jpg";
import osv from "./components/pics/storyline/osv.jpg";
import ah from "./components/pics/storyline/ah_duim.jpg";
import gym from "./components/pics/storyline/gym_duim.jpg";

/// Function for ListGroup usage
function AppListGroup() {
  let img_baby = <img className="pic-in-cont-big" src={baby_pic}></img>;
  let img_suikerspin = <img className="pic-in-cont" src={suikerspin}></img>;
  let img_osv = <img className="pic-in-cont" src={osv}></img>;
  let img_strand = <img className="pic-in-cont" src={strand}></img>;
  let img_ah = <img className="pic-in-cont" src={ah}></img>;
  let img_gym = <img className="pic-in-cont" src={gym}></img>;
  const pageHeight = PageHeight();

  return (
      <div className="Parent-container">
      <Background1 windowHeight={`${pageHeight}px`} />
      <Background2 windowHeight={pageHeight} />
        <div className="Column-container">
          <div className="Title my-font">The story of This World:</div>
          <Scroll class="Box-container my-font">
            <div>
              On a valued day in Amsterdam, The Netherlands, a baby was born:
            </div>
            <div>{img_baby}</div>
            05-05-2004
          </Scroll>
          <Scroll class="vl"></Scroll>
          <Scroll class="Box-container my-font">
            <div>
              A shy kid, but also very curious about the world around him.
              Trying to grasp as much of it as he possibly can.
            </div>
            <div>
              {img_suikerspin}
              {img_osv}
              {img_strand}
            </div>
            2004 - 2016
          </Scroll>
          <Scroll class="vl"></Scroll>
          <Scroll class="Box-container my-font">
            <div>
              Getting older, slowly building his own identity. Evaluating what
              he likes and what he doesn't. What he wants to build his own life
              around.
            </div>
            <div>
              {img_ah}
              {img_gym}
            </div>
            <div>2016 - 2022</div>
          </Scroll>
          <Scroll class="vl"></Scroll>
          <Scroll class="Box-container my-font"></Scroll>
        </div>
      </div>
  );
}

export default AppListGroup;
