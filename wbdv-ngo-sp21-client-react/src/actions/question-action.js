import questionService from "../services/question-service";

export const FIND_QUESTION_BY_ID = "FIND_QUESTION_BY_ID"
export const FIND_QUESTIONS_FOR_QUIZ = "FIND_QUESTIONS_FOR_QUIZ"

export const findQuestionById = (dispatch, quid) => {
    questionService.findQuestionById(quid).then(
        question => dispatch({type: FIND_QUESTION_BY_ID, question: question})
    );
}

export const findQuestionsForQuiz = (dispatch, qzid) =>
    questionService.findQuestionsForQuiz(qzid).then(
        questions => dispatch({type: FIND_QUESTIONS_FOR_QUIZ, questions: questions})
    )
export default {
    findQuestionsForQuiz,
    findQuestionById
}