import React from "react";
import Answer from "./Answer";

export default function Quiz(props){
    
    const [listAnswer, setList]=React.useState([]);
    const[isHit, setHit]=React.useState(false);

    

    React.useEffect(()=>{
        setList(generateRandomAnswer());
        setHit(false);
    },[props.reset, props.question])
    function generateRandomAnswer(){
        let allAnswer=props.question.incorrect_answers;
        allAnswer.push(props.correctAnswer);
        for(let i=allAnswer.length-1; i>0; i--){
            const j=Math.floor(Math.random()*(i+1));
            [allAnswer[i], allAnswer[j]]=[allAnswer[j], allAnswer[i]];
        }
        return allAnswer;
    }

    
    function checkCorrectAnswer(){
        setHit(prev=>!prev);
        props.addPoint(prev=>prev+1);

    }
    const answerElement=listAnswer.map((answer, index)=><Answer key={index} reset={props.reset} checkCorrectAnswer={checkCorrectAnswer} isHit={isHit} answer={answer} correctAnswer={props.correctAnswer}/>)


    return (
        <div>
        <div className="quiz">
            <h2 className="quizz--question">Question {props.id+1}: {props.question.question.replace(/&quot;/g, '"').replace(/&#039;/g,"'")}</h2>
            <h4 className="quiz--answerTitle">Answer:</h4>
            <div className="quiz--answer">
            {answerElement}
            </div>
        </div>
        <hr></hr>
        </div>
    );
}