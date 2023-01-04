const mongoose = require("mongoose")
const quizzesSchema = require("./quizzes-schema")
const quizzesModel = mongoose.model(
    "QuizzesModel",
    quizzesSchema,
    "quizzes"
)

module.exports = quizzesModel


