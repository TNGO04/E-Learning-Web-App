import React, {useState} from "react";

export const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState("");
    const [isGraded, setIsGraded] = useState(false);

    return (
        <div className ="list-group mt-4 card p-3 col-3" style={{width: '25rem', margin: '20px'}}>
            <h4>{question.question} </h4>
            <div className={`list-group-item 
            ${(isGraded && question.correct === "true") ?  'list-group-item-success' : ''}
            ${(isGraded && question.correct === "false" && answer === "true") ?  'list-group-item-danger' : ''}`}>
                <label><input
                    onChange={() => setAnswer("true")} type="radio" name={`option-${question._id}`}/>
                    True</label>
            </div>

            <div className={`list-group-item 
            ${(isGraded && question.correct === "false") ?  'list-group-item-success' : ''}
            ${(isGraded && question.correct === "true" && answer === "false") ?  'list-group-item-danger' : ''}`}>
                <label><input
                    onChange={() => setAnswer("false")} type="radio" name={`option-${question._id}`}/>
                    False</label>
            </div>


            <div>
                <div className="my-3">Your answer: {answer}</div>
                <button onClick={()=> {
                    setIsGraded(true)
                }} className="btn btn-primary">Grade</button>
            </div>
        </div>
    )
}

export default TrueFalseQuestion;