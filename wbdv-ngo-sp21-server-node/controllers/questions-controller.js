const questionsService = require('../services/questions/questions-service')

module.exports = (app) => {
    const findAllQuestions = (req, res) => {
        res.json(questionsService.findAllQuestions());
    }

    const findQuestionById = (req, res) => {
        const quid = req.params['questionId'];
        res.json(questionsService.findQuestionById(qzid));
    }

    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params['quizId'];
        res.json(questionsService.findQuestionsForQuiz(qzid));
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:questionId", findQuestionById);
    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz)
}