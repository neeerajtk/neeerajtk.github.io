import React, { useState } from "react";
import ParticlesContainer from "./components/Particles/ParticlesContainer";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <div className={dark ? "backgroundBlack" : "backgroundWhite"}>
      <Header setDark={setDark} dark={dark} />
      <Body dark={dark} />
      <ParticlesContainer dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}

export default App;
