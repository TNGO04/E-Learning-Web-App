import quizService from "../services/quiz-service";

export const CREATE_QUIZ = "CREATE_QUIZ";
export const DELETE_QUIZ = "DELETE_QUIZ";
export const UPDATE_QUIZ = "UPDATE_QUIZ";
export const FIND_QUIZZES_FOR_COURSE = "FIND_QUIZZES_FOR_COURSE";
export const FIND_ALL_QUIZZES = "FIND_ALL_QUIZZES";

export const createQuiz = () => {

}

export const findAllQuizzes = (dispatch) => {
    quizService.findAllQuizzes().then(
        allQuizzes => dispatch({type: FIND_ALL_QUIZZES, quizzes: allQuizzes}))
}

export default {
    findAllQuizzes
}
