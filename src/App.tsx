import React, { useState, useReducer, useEffect, ChangeEvent } from "react";
import FlipCard from "./components/FlipCard";
import styled, { css } from "styled-components";
import Reducer from "./Reducer";
import { ActionKeys, LanguageQuestion, QuestionType } from "./interfaces";
import { BackQuestionView } from "./components/BackQuestionView";
import { FrontQuestionView } from "./components/FrontQuestionView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { answerIsCorrect, answerIsWrong, unAnswered, baseUrl } from "./helpers";
import { Link, Routes, Route } from "react-router-dom";
import WordInput from "./components/WordInput";
import { db } from "./firebase";
import EditCard from "./components/EditCard";

const MainContainer = styled.main`
  border: 0px solid red;
  color: white;
  /* display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "items"
    "footer"; */
  height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  padding: 0.8em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 1.2em;
  box-shadow: 0 1px 30px -5px rgba(0, 0, 0, 0.3);
`;

const Footer = styled.footer`
  z-index: 1;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  grid-area: footer;
  padding: 0.8em;
  background-color: #17181e;
  border: solid 0px;
  width: 100vw;
  box-shadow: 1px 0px 30px -5px rgba(0, 0, 0, 0.3);
`;

const RightHeader = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.8em;
  letter-spacing: 0.1em;
`;

const Badge = styled.section`
  border-radius: 50%;
  background: #de1e4d;
  color: white;
  padding: 0 0.3em;
  font-weight: bold;
  margin: 0 0 0 0.2em;
`;

const InfoHeader = styled.section`
  display: flex;
  margin: 0 0.4em;
`;

const ItemsGrid = styled.section`
  /* z-index: -1; */
  position: fixed;
  top: 3.2em;
  right: 0px;
  bottom: 2.9em;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0.5em;
  grid-area: items;
  justify-items: center;
  overflow: auto;
  border: 0px solid white;
  padding: 1.5em;
`;

const App = () => {
  const [state, dispatch] = useReducer(Reducer, {
    cards: [],
    groups: [{ id: "1", name: "Russian Verbs" }],
  });

  const [newWord, setNewWord] = React.useState<LanguageQuestion>({
    id: "",
    imageLink: "/images/missing.jpg",
    title: "",
    answer: "",
    groupId: "1",
    proposed: "",
    audioAnswer: "",
    answerIsCorrect: null,
    answerRevealed: false,
    type: "text",
  });

  const { cards } = state;

  const addWord = async () => {
    db.collection("words").add(newWord);
    setNewWord({
      ...newWord,
      answer: "",
      title: "",
      imageLink: "/images/missing.jpg",
    });
  };

  const resetCards = () => {
    cards.map((x) => {
      const resetCard = {
        ...x,
        answerIsCorrect: null,
        answerRevealed: false,
        proposed: "",
      };

      db.collection("words").doc(x.id).set(resetCard);
    });
  };

  useEffect(() => {
    const getWords = async () => {
      db.collection("words").onSnapshot((data) => {
        const cards: LanguageQuestion[] = data.docs
          .map((x) => ({
            ...(x.data() as LanguageQuestion),
            id: x.id,
          }))
          .sort((a, b) => a.title.localeCompare(b.title));

        dispatch({
          type: ActionKeys.CARDS_LOAD,
          cards,
        });
      });
    };

    getWords();
  }, []);

  return (
    <MainContainer>
      <Header>
        <StyledLink to="/">
          <span style={{ fontStyle: "italic", color: "white" }}>Flash</span>
          <span style={{ fontWeight: "bold", color: "#DE1E4D" }}>Cards</span>
        </StyledLink>
        {(newWord.title || newWord.answer) && (
          <WordContainer>
            <span>New: </span>
            <WordView>{newWord.title}</WordView>
            <FontAwesomeIcon icon="arrow-right" />
            <WordView>{newWord.answer}</WordView>
          </WordContainer>
        )}
        <RightHeader>
          {cards.filter(unAnswered).length !== cards.length && (
            <span onClick={() => resetCards()}>
              <FontAwesomeIcon icon="retweet" size="lg" />
            </span>
          )}
        </RightHeader>
      </Header>
      <Home cards={cards} dispatch={dispatch} />
      <Footer>
        <WordInput
          newWord={newWord}
          setNewWord={setNewWord}
          addWord={addWord}
        />
        <RightHeader>
          <InfoHeader>
            <FontAwesomeIcon icon="check-circle" color="green" size="lg" />{" "}
            <Badge>{cards.filter(answerIsCorrect).length}</Badge>
          </InfoHeader>
          <InfoHeader>
            <FontAwesomeIcon icon="times-circle" color="red" size="lg" />{" "}
            <Badge>{cards.filter(answerIsWrong).length}</Badge>
          </InfoHeader>
          <InfoHeader>
            <FontAwesomeIcon icon="question-circle" size="lg" />{" "}
            <Badge>{cards.length}</Badge>
          </InfoHeader>
        </RightHeader>
      </Footer>
    </MainContainer>
  );
};

const Home = ({
  cards,
  dispatch,
}: {
  cards: LanguageQuestion[];
  dispatch: any;
}) => {
  return (
    <ItemsGrid>
      {cards.map((x) => {
        const handleProposedChanged = (e: ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: ActionKeys.CARD_UPDATE_PROPOSED,
            id: x.id,
            proposed: e.target.value,
          });
        };

        const handleFlipping = () => {
          const updatedAnswer = {
            ...x,
            answerRevealed: !x.answerRevealed,
            answerIsCorrect:
              x.proposed && x.proposed.toLowerCase() === x.answer.toLowerCase()
                ? true
                : false,
          };

          db.collection("words").doc(x.id).set(updatedAnswer);
        };

        const handleBackFlipping = () => {
            const updatedAnswer = {
              ...x,
              answerRevealed: !x.answerRevealed,
            };

            db.collection("words").doc(x.id).set(updatedAnswer);
        }

        return (
          <FlipCard
            key={x.id}
            front={
              <FrontQuestionView
                q={x}
                handleFlipping={handleFlipping}
                handleProposedChanged={handleProposedChanged}
              />
            }
            back={<BackQuestionView handleFlipping={handleBackFlipping} q={x} />}
            isFlipped={x.answerRevealed}
          />
        );
      })}
    </ItemsGrid>
  );
};

export default App;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const WordContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 0px;
  text-transform: uppercase;
`;

const WordView = styled.article`
  display: flex;
  align-items: flex-start;
  margin: 1em;
  border: solid 0px;
`;
