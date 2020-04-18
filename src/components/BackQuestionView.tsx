import React, { SFC } from "react";
import { LanguageQuestion } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  q: LanguageQuestion;
  handleFlipping: () => void;
}

const handlePlayAudio = (file: string) => {
  try {
    const aud = new Audio();

    aud.src = `./audio/${file}`;
    aud.load();
    aud.play();
  } catch (error) {
    console.dir(JSON.stringify(error));
  }
};

export const BackQuestionView: SFC<Props> = ({ q, handleFlipping }) => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <FontAwesomeIcon
        size="2x"
        color={q.answerIsCorrect ? "green" : "red"}
        icon={q.answerIsCorrect ? "check-circle" : "times-circle"}
      />
      <div>{q.pronunciation}</div>

      <StyledButton onClick={() => navigate(`/${q.id}`)}>Edit</StyledButton>
      <StyledButton onClick={() => handlePlayAudio(q.audioAnswer)}>
        Play
      </StyledButton>
      <StyledButton onClick={handleFlipping}>Flip</StyledButton>
      <Answer
        target="blank"
        href={`https://translate.google.com/#view=home&op=translate&sl=ru&tl=en&text=${q.answer}`}
      >
        {q.answer}
      </Answer>
    </MainContainer>
  );
};

const Answer = styled.a`
  display: flex;
  justify-content: center;
  font-size: 2em;
  text-decoration: none;
  padding: 2px 6px 2px 6px;
  border-radius: 1em;
  color: white;
`;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border: solid 5px;
  border-radius: 1em;
  background-color: #c88068;
`;

const StyledButton = styled.button`
  font-size: 1.2em;
  color: white;
  padding: 0.3em;
  border: 0px solid;
  border-radius: 1em;
  padding: 0.4em 0.7em;
  font-weight: bold;
  background-color: #17181e;
`;
