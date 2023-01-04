const mongoose = require('mongoose')

const questionsSchema = mongoose.Schema({
    _id: String,
    title: String,
    quizId: String,
    question: String,
    answer: String,
    correct: String,
    type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'FILL_BLANKS']},
    choices: [String]}, {collection: 'questions'});

module.exports = questionsSchema;
