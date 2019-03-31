import React, { SFC } from "react";
import { LanguageQuestion } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  return (
    <div>
      <FontAwesomeIcon
        size="2x"
        color={q.answerIsCorrect ? "green" : "red"}
        icon={q.answerIsCorrect ? "check-circle" : "times-circle"}
      />
      <div>{q.answer}</div>
      <div>{q.pronunciation}</div>
      <button onClick={() => handlePlayAudio(q.audioAnswer)}>Play</button>
      <button onClick={() => handleFlipping()}>Flip</button>
    </div>
  );
};
