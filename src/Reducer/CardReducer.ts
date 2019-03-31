import { LanguageQuestion, Actions, ActionKeys } from "../interfaces";

export const CardReducer = (
  state: LanguageQuestion,
  actions: Actions
): LanguageQuestion => {
  switch (actions.type) {
    case ActionKeys.CARD_FLIP:
      return state.id === actions.id
        ? { ...state, answerRevealed: !state.answerRevealed }
        : state;

    case ActionKeys.CARD_CHECK_ANSWER:
      return state.id === actions.id
        ? {
            ...state,
            answerIsCorrect:
              state.proposed &&
              state.proposed.toLowerCase() === state.answer.toLowerCase()
                ? true
                : false
          }
        : state;

    case ActionKeys.CARD_UPDATE_PROPOSED:
      return state.id === actions.id
        ? {
            ...state,
            proposed: actions.proposed
          }
        : state;

    default:
      return state;
  }
};

export default CardReducer;
