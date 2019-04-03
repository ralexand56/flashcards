import { AppState, Actions, ActionKeys } from "../interfaces";
import cardReducer from "./CardReducer";

export const Reducer = (
  state: AppState = { cards: [], groups: [] },
  actions: Actions
): AppState => {
  switch (actions.type) {
    case ActionKeys.CARDS_LOAD:
      return { ...state, cards: actions.cards };

    case ActionKeys.CARDS_RESET:
      return {
        ...state,
        cards: state.cards.map(c => cardReducer(c, actions))
      };

    case ActionKeys.CARD_FLIP:
      return { ...state, cards: state.cards.map(c => cardReducer(c, actions)) };

    case ActionKeys.CARD_CHECK_ANSWER:
      return { ...state, cards: state.cards.map(c => cardReducer(c, actions)) };

    case ActionKeys.CARD_UPDATE_PROPOSED:
      return { ...state, cards: state.cards.map(c => cardReducer(c, actions)) };

    default:
      return state;
  }
};

export default Reducer;
