const questionsService = require('../services/questions/questions-service')

module.exports = (app) => {
    const findAllQuestions = (req, res) =>  questionsService.findAllQuestions()
        .then(questions =>  res.json(questions));


    const findQuestionById = (req, res) => questionsService.findQuestionById(req.params['questionId'])
        .then(question => res.json(question));


    const findQuestionsForQuiz = (req, res) => questionsService.findQuestionsForQuiz(req.params['quizId'])
        .then(questionsForQuiz => res.json(questionsForQuiz));
    

    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:questionId", findQuestionById);
    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
}