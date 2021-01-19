import React from "react";
import "./style.css";
export default function Header() {
  return (
    <nav>
      <div className="headerTitles">
        <div className="headerItems">About</div>
        <div className="headerItems">Skills</div>
        <div className="headerItems">Project</div>
        <div className="headerItems">Contact</div>
      </div>
    </nav>
  );
}
