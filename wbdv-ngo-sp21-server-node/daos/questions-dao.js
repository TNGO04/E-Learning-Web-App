const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => {
    return questionsModel.find();
}

const findQuestionsById = (quid) => {
    return questionsModel.findById(quid);
}

const findQuestionsForQuiz = (qzid) => {
    return quizzesModel.findById(qzid).populate('questions').exec().then(quiz => quiz.questions);
}

module.exports = { findQuestionsForQuiz, findAllQuestions, findQuestionsById}