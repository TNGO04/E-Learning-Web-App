const quizzesService = require("../services/quizzes/quizzes-service");

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        res.send(quizzesService.findAllQuizzes());
    }

    const findQuizById = (req, res) => {
        const quid = req.params['quizId'];
        res.json(quizzesService.findQuizById(quid));
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}
