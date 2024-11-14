import React from "react"
import Quiz from "./Component/Quiz"
export default function App() {
  const [reset, setReset]=React.useState(false);
  const [questionList, setQuestionList]=React.useState([]);
  const [point, setPoint]=React.useState(0);

  React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res=>res.json())
      .then(data=>setQuestionList(data.results));

  },[reset]);  

  function resetEverything(){
    setReset(prev=>!prev);

  }
  function addPoint(){
    setPoint(prev=>prev+1);
  }

  const questionElement=questionList.map((question, index)=><Quiz key={index} id={index} reset={reset} addPoint={addPoint} question={question} correctAnswer={question.correct_answer} />);

  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  return (
    <div className="App">
      <div className="overlay" id="overlay" >
        <div>
          <h1>This is a quiz generator about many categories!!!</h1>
        </div>
        <button className="startButton" onClick={off}> <h1>START</h1></button>
      </div>
      {questionElement}
      <div className="buttonContainer">
      {questionList.length>0 && <button className="nextButton" onClick={resetEverything}>More Quizzes</button>}
      </div>
    </div>
  );
}

