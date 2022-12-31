import {
    CREATE_QUIZ,
    DELETE_QUIZ, FIND_ALL_QUIZZES,
    FIND_QUIZZES_FOR_COURSE,
    UPDATE_QUIZ
} from "../actions/quiz-action";

const initialState = {
    quizzes : []
}

export const quizReducer = (state= initialState, action) => {
    switch (action.type) {
        case CREATE_QUIZ:
            return {
                ...state,
                quizzes: [...state.quizzes, action.quiz]
            }

        case DELETE_QUIZ:
            return {
                ...state,
                quizzes: state.quizzes.filter(quiz => quiz._id !== action.quid)
            }

        case UPDATE_QUIZ:
            return {
                ...state,
                quizzes: state.quizzes.map(quiz => quiz._id === action.quiz._id ? action.quiz : quiz)
            }

        case FIND_QUIZZES_FOR_COURSE:
            return {
                ...state,
                quizzes: action.quizzes
            }

        case FIND_ALL_QUIZZES:
            return {
                ...state,
                quizzes: action.quizzes
            }
        default:
            return state
    }

}

export default quizReducer;

