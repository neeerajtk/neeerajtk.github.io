import React from "react";
import Particles from "react-particles-js";

function App() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 80,
            },
            size: {
              value: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default App;
