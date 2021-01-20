import React from "react";
import ParticlesContainer from "./components/Particles/ParticlesContainer";
import "./App.css";
import Header from "./components/Header/Header";
import Name from "./components/Body/Name";

function App() {
  return (
    <>
      <div className="particlesContainer">
        <div className="particlesContainer">
          <Header />
          <Name />
        </div>
        <ParticlesContainer />
      </div>
    </>
  );
}

export default App;
