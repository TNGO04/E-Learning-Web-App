const questionsDao = require("../../daos/questions-dao")


const findAllQuestions = () =>  questionsDao.findAllQuestions();


const findQuestionById = (quid) => questionsDao.findQuestionsById(quid);


const findQuestionsForQuiz = (qzid) => questionsDao.findQuestionsForQuiz(qzid);

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById
}