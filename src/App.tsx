import React, { useState } from "react";
import FlipCard from "./FlipCard";
import styled from "styled-components";

const MainContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0.5em;
  padding: 1em;
  justify-items: center;
`;

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handlePlayAudio = () => {
    try {
      const aud = new Audio();

      aud.src = "./audio/job.mp3";
      aud.load();
      aud.play();
    } catch (error) {
      console.dir(JSON.stringify(error));
    }
  };

  const handleFlipping = () => setIsFlipped(x => !x);

  return (
    <MainContainer>
      <FlipCard
        front={
          <div style={{ padding: "1em" }}>
            <img
              width={250}
              src="https://media.giphy.com/media/stv1Dliu5TrMs/giphy.gif"
            />
          </div>
        }
        back={
          <div>
            <div>работа</div>
            <div>rabota</div>
            <button onClick={handlePlayAudio}>Play</button>
          </div>
        }
        isFlipped={isFlipped}
        handleFlipping={handleFlipping}
      />
      <FlipCard
        front={
          <div>
            <img
              width={250}
              src="https://media.giphy.com/media/stv1Dliu5TrMs/giphy.gif"
            />
          </div>
        }
        back={
          <div>
            <div>работа</div>
            <div>rabota</div>
            <button onClick={handlePlayAudio}>Play</button>
          </div>
        }
        isFlipped={isFlipped}
        handleFlipping={handleFlipping}
      />
    </MainContainer>
  );
};

export default App;
