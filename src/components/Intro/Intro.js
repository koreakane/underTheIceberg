import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./Intro.scss";

const Intro = props => {
  const h1Style = {
    marginLeft: props.positionY * 100,
    marginRight: props.positionY,
    fontSize: `${6 + props.positionY * 10}rem`
  };

  return (
    <div className="Intro">
      <div className="container">
        <Parallax className="underTheIceberg" y={[-20, 40]}>
          <h1
            className={props.positionY >= 0.19 ? "uTUh1Dis" : "uTIh1"}
            style={h1Style}
          >
            빙
          </h1>
          <h1
            className={props.positionY >= 0.19 ? "uTUh1Dis" : "uTIh1"}
            style={h1Style}
          >
            산
          </h1>
          <h1
            className={props.positionY >= 0.19 ? "uTUh1Dis" : "uTIh1"}
            style={h1Style}
          >
            아
          </h1>
          <h1
            className={props.positionY >= 0.19 ? "uTUh1Dis" : "uTIh1"}
            style={h1Style}
          >
            래
          </h1>
        </Parallax>

        <Parallax
          className={
            props.positionY >= 0.15
              ? props.positionY <= 0.47
                ? "uTIexplain"
                : "uTIexplainDis"
              : "uTIexplainDis"
          }
          y={[-60, 100]}
        >
          <h5>우리가 경험하고 느끼는 모든 서비스는</h5>
          <h5>
            <b>빙산의 일각</b>에 불과합니다.
          </h5>
        </Parallax>

        <Parallax className="cloud1" y={[40, -30]} x={[30, -30]}>
          <img src={require("./assets/cloud1.png")}></img>
        </Parallax>
        <Parallax className="cloud2" y={[20, -50]} x={[-10, 10]}>
          <img src={require("./assets/cloud2.png")}></img>
        </Parallax>
        <Parallax className="cloud3" y={[-20, -20]} x={[-20, 20]}>
          <img src={require("./assets/cloud3.png")}></img>
        </Parallax>
        <Parallax className="cloud4" y={[-30, 60]} x={[10, -30]}>
          <img src={require("./assets/cloud2.png")}></img>
        </Parallax>
      </div>
    </div>
  );
};

export default Intro;
