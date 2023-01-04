const quizzesModel = require('../models/quizzes/quizzes-model');

const findAllQuizzes = () => quizzesModel.find();

const findQuizById = (qzid) => quizzesModel.findById(qzid);

module.exports = {findAllQuizzes, findQuizById}