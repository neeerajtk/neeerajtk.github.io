import React, { useState } from "react";
import ParticlesContainer from "./components/Particles/ParticlesContainer";
import "./App.css";
import Header from "./components/Header/Header";
import Name from "./components/Body/Name";

function App() {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <div className={dark ? "backgroundBlack" : "backgroundWhite"}>
      <div className="particlesContainer">
        <div className="particlesContainer">
          <Header setDark={setDark} dark={dark} />
          <Name dark={dark} />
        </div>
        <ParticlesContainer dark={dark} />
      </div>
    </div>
  );
}

export default App;
