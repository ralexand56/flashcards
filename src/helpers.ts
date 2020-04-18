import { LanguageQuestion } from "./interfaces";

export const baseUrl = 'http://testapp-env.d3draervx3.us-west-2.elasticbeanstalk.com/';
// export const baseUrl = 'http://localhost:3000';

export const answerIsCorrect = (question: LanguageQuestion) => question.answerIsCorrect;

export const answerIsWrong = (question: LanguageQuestion) => question.answerIsCorrect === false;

export const unAnswered = (question: LanguageQuestion) => question.answerIsCorrect === null;
