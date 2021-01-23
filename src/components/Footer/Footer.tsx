import React from "react";
import "./style.css";

interface Props {
  dark: boolean;
}

export default function Footer(props: Props) {
  return (
    <div className={props.dark ? "footerSection" : "footerSectionLight"}>
      <a href="mailto:neerajtk98@gmail.com">
        <i
          className={
            props.dark
              ? "mailme far fa-paper-plane fa-lg"
              : "mailmeLight far fa-paper-plane fa-lg"
          }
        ></i>
      </a>
    </div>
  );
}
