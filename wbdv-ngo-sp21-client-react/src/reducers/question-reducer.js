import {FIND_QUESTION_BY_ID, FIND_QUESTIONS_FOR_QUIZ} from "../actions/question-action";

const initialState = {
    questions: []
}

export const questionReducer = (state =initialState, action) => {
    switch (action.type) {
        case FIND_QUESTION_BY_ID:
            return {
                ...state,
                questions: action.question
            }

        case FIND_QUESTIONS_FOR_QUIZ:
            return {
                ...state,
                questions: action.questions
            }

        default:
            return state
    }
}

export default questionReducer;