export interface LanguageQuestion {
  id: string;
  title: string;
  imageLink: string;
  proposed: string;
  answer: string;
  pronunciation?: string;
  audioAnswer: string;
  type: QuestionType;
  groupId: string;
  group?: Group;
  answerRevealed: boolean;
  answerIsCorrect: boolean | null;
}

export declare type QuestionType = "audio" | "text";

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
  CARDS_RESET = "[cards] Reset",
  CARD_FLIP = "[card] Flip",
  CARD_CHECK_ANSWER = "[card] Check answer",
  CARD_UPDATE_PROPOSED = "[card] Update proposed answer",
}

export type Actions =
  | LoadCardsAction
  | ResetCardsAction
  | FlipCardAction
  | CheckAnswerAction
  | UpdateProposedAnswerAction;

interface LoadCardsAction {
  type: ActionKeys.CARDS_LOAD;
  cards: LanguageQuestion[];
}

interface ResetCardsAction {
  type: ActionKeys.CARDS_RESET;
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
