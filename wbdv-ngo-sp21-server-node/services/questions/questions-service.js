const questions = require("./questions")

const createQuestion = () => {

}

const createQuestionForQuiz = () => {

}

const findAllQuestions = () => {
    return questions;
}

const findQuestionById = (quid) => {
    return questions.find(question => question._id === quid);
}

const findQuestionsForQuiz = (qzid) => {
    return questions.filter(question => question.quizId === qzid);
}

const updateQuestion = () => {

}

const deleteQuestion = () => {

}



module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById
}