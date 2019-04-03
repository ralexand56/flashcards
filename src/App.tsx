import React, { useState, useReducer, useEffect } from "react";
import FlipCard from "./components/FlipCard";
import styled, { css } from "styled-components";
import Reducer from "./Reducer";
import { ActionKeys } from "./interfaces";
import { BackQuestionView } from "./components/BackQuestionView";
import { FrontQuestionView } from "./components/FrontQuestionView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { answerIsCorrect, answerIsWrong, unAnswered } from "./helpers";

const MainContainer = styled.main`
  border: 0px solid red;
  color: white;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "items"
    "footer";
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  grid-area: header;
  padding: 0.8em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 1.2em;
  box-shadow: 0 1px 30px -5px rgba(0, 0, 0, 0.3);
`;

const Footer = styled.footer`
  grid-area: footer;
  padding: 0.8em;
  height: 1em;
  box-shadow: 1px 0px 30px -5px rgba(0, 0, 0, 0.3);
`;

const RightHeader = styled.section`
  display: flex;
  justify-content: space-between;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0.5em;
  grid-area: items;
  justify-items: center;
  overflow: auto;
  padding: 1.5em;
`;

const App = () => {
  const [state, dispatch] = useReducer(Reducer, {
    cards: [],
    groups: [{ id: "1", name: "Russian Verbs" }]
  });

  const { cards } = state;

  useEffect(() => {
    dispatch({
      type: ActionKeys.CARDS_LOAD,
      cards: [
        {
          id: "1",
          title: "",
          imageLink: "https://media.giphy.com/media/stv1Dliu5TrMs/giphy.gif",
          type: "text",
          groupId: "1",
          answer: "работа",
          pronunciation: "rabota",
          audioAnswer: "job.mp3",
          answerRevealed: false,
          answerIsCorrect: null,
          proposed: ""
        },
        {
          id: "2",
          title: "",
          imageLink:
            "https://media.kaboom.org/app/assets/resources/000/002/279/original/cities4.jpg",
          type: "text",
          groupId: "1",
          answer: "работа",
          pronunciation: "rabota",
          audioAnswer: "job.mp3",
          answerRevealed: false,
          answerIsCorrect: null,
          proposed: ""
        }
      ]
    });
  }, []);

  // console.dir(state);

  return (
    <MainContainer>
      <Header>
        <section>
          <span style={{ fontStyle: "italic" }}>Flash</span>
          <span style={{ fontWeight: "bold", color: "#DE1E4D" }}>Cards</span>
        </section>
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
          {cards.filter(unAnswered).length !== cards.length && (
            <span onClick={() => dispatch({ type: ActionKeys.CARDS_RESET })}>
              <FontAwesomeIcon icon="retweet" size="lg" />
            </span>
          )}
        </RightHeader>
      </Header>
      <ItemsGrid>
        {cards
          .sort((a, b) => a.id.localeCompare(b.id))
          .map(x => (
            <FlipCard
              key={x.id}
              front={
                <FrontQuestionView
                  q={x}
                  handleFlipping={() => {
                    dispatch({ type: ActionKeys.CARD_FLIP, id: x.id });
                    dispatch({ type: ActionKeys.CARD_CHECK_ANSWER, id: x.id });
                  }}
                  handleProposedChanged={val =>
                    dispatch({
                      type: ActionKeys.CARD_UPDATE_PROPOSED,
                      id: x.id,
                      proposed: val
                    })
                  }
                />
              }
              back={
                <BackQuestionView
                  q={x}
                  handleFlipping={() =>
                    dispatch({ type: ActionKeys.CARD_FLIP, id: x.id })
                  }
                />
              }
              isFlipped={x.answerRevealed}
            />
          ))}
      </ItemsGrid>
      <Footer />
    </MainContainer>
  );
};

export default App;
