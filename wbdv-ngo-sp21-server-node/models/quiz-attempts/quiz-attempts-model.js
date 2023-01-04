const mongoose = require('mongoose');
const quizAttemptsSchema = require("./quiz-attempts-schema");

const quizAttemptsModel = mongoose.model(
    'QuizAttemptModel',
    quizAttemptsSchema,
    'quizAttempts'
)

module.exports = quizAttemptsModel;