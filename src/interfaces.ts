export interface LanguageQuestion {
  id: string;
  title: string;
  imageLink: string;
  proposed?: string;
  answer: string;
  pronunciation?: string;
  audioAnswer: string;
  type: "audio" | "text";
  groupId: string;
  group?: Group;
  answerRevealed: boolean;
  answerIsCorrect: boolean | null;
}

export interface Group {
  id: string;
  name: string;
}

export interface AppState {
  cards: LanguageQuestion[];
  currentGroupId?: string;
  groups: Group[];
}

export enum ActionKeys {
  CARDS_LOAD = "[cards] Load",
  CARD_FLIP = "[card] Flip",
  CARD_CHECK_ANSWER = "[card] Check answer",
  CARD_UPDATE_PROPOSED = "[card] Update proposed answer"
}

export type Actions =
  | LoadCardsAction
  | FlipCardAction
  | CheckAnswerAction
  | UpdateProposedAnswerAction;

interface LoadCardsAction {
  type: ActionKeys.CARDS_LOAD;
  cards: LanguageQuestion[];
}

interface FlipCardAction {
  type: ActionKeys.CARD_FLIP;
  id: string;
}

interface CheckAnswerAction {
  type: ActionKeys.CARD_CHECK_ANSWER;
  id: string;
}

interface UpdateProposedAnswerAction {
  type: ActionKeys.CARD_UPDATE_PROPOSED;
  proposed: string;
  id: string;
}
