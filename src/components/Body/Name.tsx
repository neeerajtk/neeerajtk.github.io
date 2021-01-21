import React from "react";
import "./style.css";
import Typed from "react-typed";
import Emoji from "a11y-react-emoji";

export default function Name() {
  return (
    <>
      <div className="nameContainer">
        <h1 className="nameDescription">
          Hi, I'm <span className="name">Neeraj</span>{" "}
          <Emoji symbol="👋🏻" label="Hi" />
        </h1>
      </div>
      <div className="nameContainer">
        <h4 className="subHeading">
          I'm a{" "}
          <Typed
            className="typedText"
            strings={[
              "Frontend Developer !",
              "Btech Graduate !",
              "Minimalist !",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h4>
      </div>
    </>
  );
}
