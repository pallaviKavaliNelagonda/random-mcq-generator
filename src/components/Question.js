import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Results from "./Results.js";
import{TbBulb} from "react-icons/tb"
import { BsArrowRight } from "react-icons/bs";
// import { data } from "../data.js";

const Question = ({data}) => {

  const [questNum, setQuestNum] = useState(0);
  const [question, setQuestion] = useState(data[0]);
  const [options, setOptions] = useState(data[0].options)
  const [showSubmit, setShowSubmitBtn] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [showHint,setShowHint]=useState(false)
  const [grade, setGrade] = useState(0);
  const len = data.length;


console.log(data)
const selectAnswers =(e)=>{
  console.log(e.target.dataset.value);
  const value=e.target.dataset.value
  const newOption= options.map((el)=>{
             if(el.option===value){
            el.selected=!el.selected
           }
          return el
           }
  )
  setOptions(newOption)
}

  const submitAnswer = (e) => {
    e.preventDefault();

    const mark=options.filter(el=>el.selected && !el.is_correct)
    const is_all_selected=options.filter(el=>el.selected)
    console.log("mark",mark,is_all_selected)
    if(mark.length==0 && is_all_selected.length>0){
      setGrade(grade+1)
    }
    setShowSubmitBtn(false);
    setQuestNum(questNum+1);

  };

const handleNextQuestion=()=>{
  setShowHint(false)
  if(questNum===len){
    setShowResult(true)
  }else{
    setShowSubmitBtn(true)
    const nextQuestion=data[questNum]
    setQuestion(nextQuestion)
    const nextOption=nextQuestion.options
    setOptions(nextOption)
  }

}
  return (
    <div className="startPage">
      {/* <h1>Quiz</h1> */}

      {showResult ? (
        <Results grade={grade}
        data={data} />
      ) : (

        <div className="question-panel">
          <div className="header">
            <h5>Correct Answers:  <span className="portion ">{grade}</span> </h5>
            <h5>Develop by pallavi : <span className="portion">{question.portion}</span></h5>
          </div>
          <h1>{question.question}</h1>

            <form onSubmit={e=>submitAnswer(e)}>
                <div className="options">
                    {options.map(({option,selected,is_correct},index)=>
                    <div key={index} type="text" data-value={option} name={option} className= {showSubmit?
                      (selected?"selected-option option-button":"option-button") :
                      (selected? (!is_correct?"wrong-answer option-button":"selected-option option-button"):
                                 (is_correct?"selected-option option-button":" option-button")
                                 )}
                       onClick={e=>selectAnswers(e) }>{option}</div>
                    )}
                </div>
             <input type="submit"className={showSubmit?"btn1 btn-submit" :"hidden"}/>
            </form>

            {!showResult && (<div className="footer_buttons">
      <button className="btn1 next-btn" onClick={handleNextQuestion} >
          {questNum < len? "Next Question" : "Show Results"} <BsArrowRight  className="rightArrow"/>
        </button>
        <div onClick={()=>setShowHint(true)} className="Hint_btn">{showHint?`${question.hint}`:<TbBulb className="iconhint"/>}</div>

      </div>)}
      <button onClick={()=>setShowResult(true)} className="btn1 fullres-btn">See Full questions</button>
      <Link  className="addQuestionBtn" to='/addQuestions'><button className="btn1 fullres-btn ">Add More Qestions</button></Link>
        </div>


      )}



    </div>
  );
};

export default Question;
