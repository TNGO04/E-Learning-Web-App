let quizzes = require('./quizzes.json')
const quizzesModel = require('../../models/quizzes/quizzes-model')

const findAllQuizzes = () => {
    return quizzesModel.find();
}

const findQuizById = (qzid) => {
    return quizzesModel.find({"_id": qzid});
}

module.exports = {
    findQuizById,
    findAllQuizzes
}