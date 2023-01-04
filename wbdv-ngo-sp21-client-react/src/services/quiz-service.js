import React from "react";

const API_URL = `http://localhost:2000/api`

export const findAllQuizzes = () =>
    fetch(`${API_URL}/quizzes`).then(allQuizzes => allQuizzes.json());

export const findQuizById = (qzid) =>
    fetch(`${API_URL}/quizzes/${qzid}`).then(quiz => quiz.json());

export const submitQuiz = (qzid, attempt) =>
    fetch(`${API_URL}/quizzes/${qzid}/attempts`, {
        method: 'POST',
        body: JSON.stringify(attempt),
        headers: {
            'content-type': 'application/json'
        }}).then(response => response.json())

export default {
    findQuizById,
    findAllQuizzes,
    submitQuiz
}