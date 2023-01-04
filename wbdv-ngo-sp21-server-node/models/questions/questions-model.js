const mongoose = require('mongoose')
const questionsSchema = require("./questions-schema");

const questionsModel = mongoose.model(
    "QuestionsModel",
    questionsSchema,
    "questions"
)

module.exports = questionsModel;