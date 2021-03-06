import React from "react";
import "./style.css";

type Props = {
  dark: boolean;
  setDark: (setDark: boolean) => void;
};

export default function Header(props: Props) {
  return (
    <nav>
      <div className="headerTitles">
        <i
          className={
            props.dark
              ? "switch fas fa-toggle-on fa-2x"
              : "switchLight fas fa-toggle-off fa-2x"
          }
          onClick={() => {
            props.setDark(!props.dark);
          }}
        ></i>
      </div>
    </nav>
  );
}
