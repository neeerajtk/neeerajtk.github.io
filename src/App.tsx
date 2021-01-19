import React from "react";
import ParticlesContainer from "./components/Particles/ParticlesContainer";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="particlesContainer">
        <div className="particlesContainer">
          <Header />
        </div>
        <ParticlesContainer />
      </div>
    </>
  );
}

export default App;
