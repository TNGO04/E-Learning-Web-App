const mongoose = require("mongoose")
const quizSchema = require("./quizzes-schema")
const quizzesModel = mongoose.model(
    "Quiz",
    quizSchema,
    "quizzes"
)

module.exports = quizzesModel


