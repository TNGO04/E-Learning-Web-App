import quizService from "../services/quiz-service";

export const CREATE_QUIZ = "CREATE_QUIZ";
export const DELETE_QUIZ = "DELETE_QUIZ";
export const UPDATE_QUIZ = "UPDATE_QUIZ";
export const FIND_QUIZZES_FOR_COURSE = "FIND_QUIZZES_FOR_COURSE";
export const FIND_ALL_QUIZZES = "FIND_ALL_QUIZZES";
export const SUBMIT_QUIZ = "SUBMIT_QUIZ";

export const createQuiz = () => {

}

export const findAllQuizzes = (dispatch) => {
    quizService.findAllQuizzes().then(
        allQuizzes => dispatch({type: FIND_ALL_QUIZZES, quizzes: allQuizzes}))
}

export const submitQuiz = (dispatch, quizId, question) => {
    quizService.submitQuiz(quizId, question).then(
        attempt => dispatch({type: SUBMIT_QUIZ, attempt: attempt})
    )
}

export default {
    findAllQuizzes,
    submitQuiz
}
