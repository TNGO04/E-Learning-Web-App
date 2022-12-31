import React from "react";

const API_URL = `http://localhost:2000/api`

export const findAllQuizzes = () =>
    fetch(`${API_URL}/quizzes`).then(allQuizzes => allQuizzes.json());

export const findQuizById = (quid) =>
    fetch(`${API_URL}/quizzes/${quid}`).then(quiz => quiz.json());

export default {
    findQuizById,
    findAllQuizzes
}