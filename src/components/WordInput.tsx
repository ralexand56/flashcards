import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageQuestion } from "../interfaces";

interface Props {
  newWord: LanguageQuestion;
  addWord: () => void;
  setNewWord: (nw: LanguageQuestion) => void;
}

const WordInput = (props: Props) => {
  const { newWord, addWord, setNewWord } = props;

  return (
    <InputLayout>
      <input
        placeholder="english..."
        value={newWord.title}
        onKeyDown={(e) => e.key == "Enter" && addWord()}
        onChange={(e) => setNewWord({ ...newWord, title: e.target.value })}
      />
      <input
        placeholder="russian..."
        value={newWord.answer}
        onKeyDown={(e) => e.key == "Enter" && addWord()}
        onChange={(e) => setNewWord({ ...newWord, answer: e.target.value })}
      />
      <input
        placeholder="image url..."
        value={newWord.imageLink}
        onKeyDown={(e) => e.key == "Enter" && addWord()}
        onChange={(e) => setNewWord({ ...newWord, imageLink: e.target.value })}
      />
      <Button disabled={!newWord.title || !newWord.answer} onClick={addWord}>
        <FontAwesomeIcon icon="plus" />
      </Button>
    </InputLayout>
  );
};

const InputLayout = styled.section`
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 0.3em;
`;

export default WordInput;
