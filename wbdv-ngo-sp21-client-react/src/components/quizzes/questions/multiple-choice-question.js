import React, {useState} from "react";

export const MultipleChoiceQuestion = ({question, submitQuiz}) => {
    const [answer, setAnswer] = useState("");
    const [isGraded, setIsGraded] = useState(false);

    return (
        <div className ="list-group mt-4 card p-3 col-3" style={{width: '20rem', margin: '20px'}}>
            <h4>{question.question}</h4>

            {
                question.choices.map(choice =>
                    <div className={`list-group-item 
                        ${isGraded &&
                          ((question.correct === choice ? `list-group-item-success` : '')
                          || (answer === choice ? `list-group-item-danger` : ''))}`}>
                        <label><input onChange={(event) => setAnswer(choice) }
                                      type="radio" name={`option-${question._id}`}/> {choice}</label>
                    </div>)

            }

            <div>
                <div className="my-3">Your answer: {answer}</div>
                <button onClick={()=> {
                    setIsGraded(true)
                    question.answer = answer
                    submitQuiz(question.quizId, question)
                }} className="btn btn-primary">Submit</button>
            </div>

        </div>


    )
}

export default MultipleChoiceQuestion;