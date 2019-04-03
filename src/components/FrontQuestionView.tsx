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
  background-size: cover;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 0px solid;
`;

const AnswerContainer = styled.section`
  display: flex;
  justify-content: space-around;
`;

const StyledInput = styled.input`
  font-size: 1.2em;
  width: 9em;
`;

const StyledButton = styled.button`
  font-size: 1.2em;
  padding: 0.3em;
`;

export const FrontQuestionView: SFC<Props> = ({
  q,
  handleFlipping,
  handleProposedChanged
}) => {
  return (
    <Main style={{ backgroundImage: `url(${q.imageLink})` }}>
      <AnswerContainer>
        <StyledInput
          lang="ru"
          placeholder="answer..."
          value={q.proposed}
          onChange={evt => handleProposedChanged(evt.currentTarget.value)}
          onKeyDown={evt => {
            evt.keyCode === 13 && handleFlipping();
          }}
        />
        <StyledButton onClick={handleFlipping}>?</StyledButton>
      </AnswerContainer>
    </Main>
  );
};
