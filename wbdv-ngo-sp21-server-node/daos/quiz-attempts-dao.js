const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const scoreQuiz = (questions) => {
    let correctQuestions = 0;

    questions.forEach(question => {
        if (question.answer === question.correct) {
            correctQuestions += 1;
        }
    })

    return correctQuestions * 100 /questions.length;
}

const findAttemptsForQuiz = qzid =>
    quizAttemptsModel.find({quiz: qzid}).populate('quiz');

const createAttempt = (qzid, attempt) =>
    quizzesModel.create({score: scoreQuiz(attempt), answers: attempt, quiz: qzid});

module.exports = {findAttemptsForQuiz, createAttempt}