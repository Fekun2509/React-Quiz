import React from "react";

export default function Answer(props){
    const [colorState, setColorState]= React.useState("white");
    React.useEffect(()=>{
        setColorState("white");
    }, [props.reset]);
    React.useEffect(()=>{
        if(props.isHit===true) {
        if(props.answer===props.correctAnswer){
            setColorState("green");
        }
    }
    },[props.isHit])
  
    function hitAnswer(){
        if(props.isHit===false) {
            props.checkCorrectAnswer();
            if(props.answer===props.correctAnswer){
                setColorState("green");
            }
            else{
                setColorState("red");
            }
        }
        
    }
  
    return (
        <div style={{backgroundColor: colorState}} onClick={hitAnswer} className="answerBox">
            {props.answer.replace(/&quot;/g, '"').replace(/&#039;/g,"'")}
        </div>
    )
}