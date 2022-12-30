let quizzes = require('./quizzes.json')


const findAllQuizzes = () => {
    return quizzes;
}

const findQuizById = (qzid) => {
    return quizzes.find(quiz => quiz._id === qzid);
}

module.exports = {
    findQuizById,
    findAllQuizzes
}