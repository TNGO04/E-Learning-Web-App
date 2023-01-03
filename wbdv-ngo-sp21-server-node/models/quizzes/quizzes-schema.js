const mongoose = require('mongoose')

const quizSchema = mongoose.Schema({
    _id: String,
    title:String }, {collection: "quizzes"});

module.exports = quizSchema;


