const quizAttemptsDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {
    const findAttemptsForQuiz = (req, res) =>
        quizAttemptsDao.findAttemptsForQuiz(req.params.qzid)
            .then(attempts => res.json(attempts));

    const createAttempt = (req,res) =>
        quizAttemptsDao.createAttempt(req.params.qzid,req.body)
            .then(attempt => res.json(attempt));

    app.get('/api/quizzes/:qzid/attempts', findAttemptsForQuiz)
    app.post('/api/quizzes/:qzid/attempts', createAttempt)
}

