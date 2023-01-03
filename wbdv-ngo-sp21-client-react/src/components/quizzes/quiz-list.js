import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizAction from "../../actions/quiz-action";
import {connect} from "react-redux";



export const QuizList = ({
    quizzes = [],
    findAllQuizzes}) => {

    const {layout, courseId} = useParams();

    useEffect(() => {
        findAllQuizzes();
    }, [courseId])

    return (

        <div className="container-fluid m-3 list-group">
            <h1>Quiz List</h1>
            {
                quizzes.map(quiz =>
                    <li>
                        <Link to={`/courses/${layout}/edit/${courseId}/quizzes/${quiz._id}`}>
                            {quiz.title}
                        </Link>
                    </li>)
            }

        </div>

    )
}

const stpm = (state) => ({
    quizzes : state.quizReducer.quizzes
})

const dtpm = (dispatch) => ({
    findAllQuizzes: () => quizAction.findAllQuizzes(dispatch)
})

export default connect(stpm, dtpm)(QuizList);