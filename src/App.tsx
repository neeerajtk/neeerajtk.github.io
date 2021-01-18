import React from "react";
import ParticlesContainer from "./components/ParticlesContainer";
import "./App.css";

function App() {
  return (
    <>
      <div className="particlesContainer">
        <ParticlesContainer />
        <div className="particlesContainer">Hello World</div>
      </div>
    </>
  );
}

export default App;
