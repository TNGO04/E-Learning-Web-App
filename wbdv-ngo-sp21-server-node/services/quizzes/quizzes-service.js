const quizzesDao = require('../../daos/quizzes-dao')

const findAllQuizzes = () => quizzesDao.findAllQuizzes();

const findQuizById = (qzid) => quizzesDao.findQuizById(qzid);

module.exports = {
    findQuizById,
    findAllQuizzes
}