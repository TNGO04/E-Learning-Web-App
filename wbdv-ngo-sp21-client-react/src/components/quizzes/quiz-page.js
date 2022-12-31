import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import questionAction from "../../actions/question-action";
import MultipleChoiceQuestion from "./questions/multiple-choice-question";
import {connect} from "react-redux";
import TrueFalseQuestion from "./questions/true-false-question";

export const QuizPage = ({
    questions = [],
    findQuestionsForQuiz}) => {
    const {layout, courseId, quizId} = useParams();

    useEffect(() => {
        findQuestionsForQuiz(quizId);
    }, [courseId, quizId])

    return (
        <div className="container-fluid m-3 list-group">
            <h2>Quiz {quizId}</h2>
            <div className="row">
            {
                questions.map(question =>
                    <>
                        {question.type === "TRUE_FALSE" &&
                            <TrueFalseQuestion key={question._id} question={question} />}
                        {question.type === "MULTIPLE_CHOICE" &&
                            <MultipleChoiceQuestion key={question._id} question={question} />}
                    </>
                              )
            }
            </div>

        </div>
    )

}

const stpm = state => ({
    questions: state.questionReducer.questions
})

const dtpm = dispatch => ({
    findQuestionsForQuiz: (quid) => questionAction.findQuestionsForQuiz(dispatch, quid)
})

export default connect(stpm,dtpm)(QuizPage)