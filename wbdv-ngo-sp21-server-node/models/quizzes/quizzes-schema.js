const mongoose = require('mongoose')

const quizzesSchema = mongoose.Schema({
    _id: String,
    title:String,
    questions: [{
        type: String,
        ref: 'QuestionsModel'
    }]}, {collection: "quizzes"});

module.exports = quizzesSchema;


