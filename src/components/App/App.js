import React, { useState, useEffect } from "react";
import "./App.scss";

import Penguin from "../Penguin/Penguin";
import Intro from "../Intro/Intro";

function App() {
  const [positionY, setPositionY] = useState(0); //Y 스크롤값

  function listenToScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setPositionY(scrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  useEffect(() => {
    console.log(positionY);
  });

  return (
    <div className="App">
      <Intro positionY={positionY}></Intro>
      <Penguin positionY={positionY}></Penguin>
    </div>
  );
}

export default App;
