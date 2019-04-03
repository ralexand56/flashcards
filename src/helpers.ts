import { LanguageQuestion } from "./interfaces";

export const answerIsCorrect = (question: LanguageQuestion) => question.answerIsCorrect;

export const answerIsWrong = (question: LanguageQuestion) => question.answerIsCorrect === false;

export const unAnswered = (question: LanguageQuestion) => question.answerIsCorrect === null;
