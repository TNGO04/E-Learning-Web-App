import React from "react";

const API_URL = `http://localhost:2000/api`

export const findAllQuestions = () =>
    fetch(`${API_URL}/questions`).then(allQuestions => allQuestions.json());

export const findQuestionById = (quid) =>
    fetch(`${API_URL}/questions/${quid}`).then(question => question.json());

export const findQuestionsForQuiz = (qzid) =>
    fetch(`${API_URL}/quizzes/${qzid}/questions`).then(questions => questions.json());

export default {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}