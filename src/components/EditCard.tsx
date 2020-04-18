import * as React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { LanguageQuestion } from "../interfaces";
import { db } from "../firebase";

export const EditCard = (props: any) => {
  const { id } = useParams();
  const [word, setWord] = React.useState<LanguageQuestion>();

  React.useEffect(() => {
    const getWord = async () => {
      const getWord = db.collection("words").doc(id);
      const item = await getWord.get();

      setWord(item.data() as LanguageQuestion);
    };

    getWord();
  }, []);

  const updateWord = (updatedWord: LanguageQuestion) => {
    word && db.collection("words").doc(word.id).set(updatedWord);
  };

  return (
    <MainContainer>
      {word ? (
        <div>
          <StyledLink
            target="blank"
            href={`https://translate.google.com/#view=home&op=translate&sl=ru&tl=en&text=${word.answer}`}
          >
            Goto Google
          </StyledLink>
          <FieldContainer>
            <StyledLabel>Answer</StyledLabel>
            <StyledInput
              type="text"
              value={word.answer}
              onChange={(e) => {
                const updatedWord: LanguageQuestion = {
                  ...word,
                  answer: e.target.value,
                };
                setWord(updatedWord);
                updateWord(updatedWord);
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <StyledLabel>Pronunciation</StyledLabel>
            <StyledInput
              type="text"
              value={word.pronunciation}
              onChange={(e) => {
                const updatedWord: LanguageQuestion = {
                  ...word,
                  pronunciation: e.target.value,
                };
                setWord(updatedWord);
                updateWord(updatedWord);
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <StyledLabel>Image Link</StyledLabel>
            <StyledInput
              type="text"
              value={word.imageLink}
              onChange={(e) => {
                const updatedWord: LanguageQuestion = {
                  ...word,
                  imageLink: e.target.value,
                };
                setWord(updatedWord);
                updateWord(updatedWord);
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <StyledLabel>English</StyledLabel>
            <StyledInput
              type="text"
              value={word.title}
              onChange={(e) => {
                const updatedWord: LanguageQuestion = {
                  ...word,
                  title: e.target.value,
                };
                setWord(updatedWord);
                updateWord(updatedWord);
              }}
            />
          </FieldContainer>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.section`
  position: fixed;
  top: 3.2em;
  right: 0px;
  bottom: 2.9em;
  width: 100vw;
  grid-area: edit;
  padding: 2em;
`;

const FieldContainer = styled.section`
  display: flex;
  margin: 0.5em;
`;

const StyledLabel = styled.header`
  display: flex;
  justify-content: flex-end;
  color: white;
  background: #de1e4d;
  position: relative;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  width: 11em;
  border: none;
  outline: none;
  padding: 0 1em;
  text-transform: uppercase;
  border-radius: 1.5em 0 0 1.5em;
`;

const StyledInput = styled.input`
  position: relative;
  font-size: 1.2em;
  border: none;
  outline: none;
  padding: 0 1em;
  border-radius: 0 1.5em 1.5em 0;
  transition: all 0.5s;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  position: relative;
  font-size: 1.2em;
  width: 9em;
  border: none;
  outline: none;
  padding: 0 1em;
  border-radius: 0 1.5em 1.5em 0;
  transition: all 0.5s;
`;

export default EditCard;
