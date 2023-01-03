const quizzesService = require("../services/quizzes/quizzes-service");

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.json(quizzes)
            });
    }

    const findQuizById = (req, res) => {
        const qzid = req.params['quizId'];

        quizzesService.findQuizById(qzid).then(
            quiz => {
                res.json(quiz)
            }
        )
        ;
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}
