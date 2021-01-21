import React from "react";
import "./style.css";
import Typed from "react-typed";

export default function Name() {
  return (
    <div className="nameContainer">
      <h1 className="nameDescription">
        Hi, I'm <span className="name">Neeraj</span> !
      </h1>
      <Typed
        strings={["Frontend Developer", "Btech Graduate"]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
      <br />
    </div>
  );
}
