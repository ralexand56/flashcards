import React, { SFC } from "react";
import { LanguageQuestion } from "../interfaces";
import styled from "styled-components";

interface Props {
  q: LanguageQuestion;
  handleFlipping: () => void;
  handleProposedChanged: (val: string) => void;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-size: cover;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 0px solid;
  border-radius: 1em;
`;

const AnswerContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const StyledInput = styled.input`
  position: relative;
  font-size: 1.2em;
  width: 9em;
  border: none;
  outline: none;
  padding: 0 1em;
  border-radius: 1.5em 0 0 1.5em;
  /* &[value=""] {
    background-color: white;
  }
  &:not([value=""]):invalid {
    background-color: pink;
  }
  &:not([value=""]):valid {
    background-color: lightblue;
  } */
  /* &:invalid+span:after {
    color: red;
    top: -100%;
    left: 0;
    z-index: 10000;
    position: absolute;
    font-weight: bold;
    content: "Error corrected";
  } */
  transition: all 0.5s;
`;

const StyledButton = styled.button`
  font-size: 1.2em;
  color: white;
  padding: 0.3em;
  border: 0px solid;
  border-radius: 0 1em 1em 0;
  padding: 0.4em 0.7em;
  font-weight: bold;
  background-color: #17181e;
`;

const AlternateText = styled.header`
  position: relative;
  margin-bottom: 8em;
  color: #2d0c15;
  font-weight: bold;
  font-size: 1em;
`;

export const FrontQuestionView: SFC<Props> = ({
  q,
  handleFlipping,
  handleProposedChanged,
}) => {
  return (
    <Main style={{ backgroundImage: `url(${q.imageLink})` }}>
      <AlternateText>{q.title}</AlternateText>
      <AnswerContainer>
        <StyledInput
          lang="ru"
          type="text"
          required={true}
          placeholder="answer..."
          value={q.proposed}
          onChange={(evt) => handleProposedChanged(evt.currentTarget.value)}
          onKeyDown={(evt) => {
            evt.keyCode === 13 && handleFlipping();
          }}
        />
        <span />
        <StyledButton onClick={handleFlipping}>?</StyledButton>
      </AnswerContainer>
    </Main>
  );
};