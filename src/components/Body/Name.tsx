import React from "react";
import "./style.css";
import Typed from "react-typed";
import Emoji from "a11y-react-emoji";
import profile from "../../assets/profile.jpeg";

interface Props {
  dark: boolean;
}

export default function Name(props: Props) {
  return (
    <>
      <div className="imageContainer">
        <img src={profile} id="profileImage" alt="profilepicture" />
      </div>
      <div className="nameContainer">
        <h1 className={props.dark ? "nameDescription" : "nameDescriptionLight"}>
          Hi, I'm{" "}
          <span className={props.dark ? "name" : "nameLight"}>Neeraj</span>{" "}
          <Emoji symbol="👋🏻" label="Hi" />
        </h1>
      </div>
      <div className="nameContainer">
        <h4 className={props.dark ? "subHeading" : "subHeadingLight"}>
          <Typed
            className={props.dark ? "typedText" : "typedTextLight"}
            strings={[
              "I'm a Frontend Developer !",
              "I'm an Engineering Graduate !",
              "I work in ReactJS & Typescript !",
              "I love web development !",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h4>
      </div>
      <div className="socialContainer">
        <a href="https://www.linkedin.com/in/neeerajtk/">
          <i
            className={
              props.dark
                ? "social fab fa-linkedin fa-2x"
                : "socialLight fab fa-linkedin fa-2x"
            }
          ></i>
        </a>
        <a href="https://github.com/neeerajtk">
          <i
            className={
              props.dark
                ? "social fab fa-github fa-2x"
                : "socialLight fab fa-github fa-2x"
            }
          ></i>
        </a>
        <a href="https://www.instagram.com/neeerajtk/">
          <i
            className={
              props.dark
                ? "social fab fa-instagram fa-2x"
                : "socialLight fab fa-instagram fa-2x"
            }
          ></i>
        </a>
      </div>
    </>
  );
}
