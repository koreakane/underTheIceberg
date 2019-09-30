import React, { useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";
import "./Penguin.scss";

const Penguin = props => {
  const pictures = ["./assets/iceberg.png", "./assets/iceberg_crop.png"];

  useEffect(() => {
    pictures.forEach(picture => {
      const img = new Image();
      img.src = picture;
      console.log(img)
    });
    console.log(pictures);
  }, []);

  return (
    <div className="Landing">
      <Parallax
        className="lol1"
        bgImage={require("./assets/iceberg.png")}
        strength={200}
        renderLayer={percentage => (
          <div className="fullContainer">
            <img
              src={require("./assets/iceberg_crop.png")}
              alt="iceberg"
              style={{
                position: "absolute",
                left: "50%",
                top: "52.5%",
                transform: "translate(-50%,-50%)",
                width: window.innerWidth + 100 - percentage * 500,
                height: window.innerWidth * 1.26 + 126 - percentage * 630
              }}
            ></img>
            <div
              className="semetexContainer"
              style={{
                position: "absolute",
                left: "50%",
                top: "52.5%",
                transform: "translate(-50%,-50%)",
                width: window.innerWidth + 100 - percentage * 500,
                height: window.innerWidth * 1.26 + 126 - percentage * 630
              }}
            >
              {/* <img
                src={require("./assets/symbol_PRgnb_black@3x.png")}
                alt="iceberg"
                style={{
                  width: 200,
                  height: 100,
                  position: "absolute",
                  left: "50%",
                  top: "53.5%"
                }}
              ></img> */}
              <div className="FrontEnd">
                <h3>Front-End</h3>
              </div>
              <div className="BackEnd">
                <h3>Back-End</h3>
              </div>
              <div className="Branding">
                <h3>Branding</h3>
              </div>
              <div className="UX">
                <h3>UX</h3>
              </div>
              <div className="Design">
                <h3>Design</h3>
              </div>
              <div className="Agile">
                <h3>Agile</h3>
              </div>
              <div className="Marketing">
                <h3>Marketing</h3>
              </div>
            </div>
          </div>
        )}
      ></Parallax>
    </div>
  );
};

export default Penguin;
