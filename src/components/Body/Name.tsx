import React from "react";
import "./style.css";
import Typed from "react-typed";
import Emoji from "a11y-react-emoji";
import profile from "../../assets/profile.jpeg";

export default function Name() {
  return (
    <>
      <div className="imageContainer">
        <img src={profile} id="profileImage" />
      </div>
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
      <div className="socialContainer">
        <a href="https://www.linkedin.com/in/neeerajtk/">
          <i className="social fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/neeerajtk">
          <i className="social fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/neeerajtk/">
          <i className="social fab fa-instagram fa-2x"></i>
        </a>
      </div>
    </>
  );
}
