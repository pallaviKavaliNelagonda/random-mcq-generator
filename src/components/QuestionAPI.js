import React, { useEffect, useState } from 'react'
import {BsArrowLeft} from "react-icons/bs"
import {Link} from "react-router-dom"
import { useGlobalContext } from '../context/DataContext';
import { useAPIContext } from '../context/APIContext';
function QuestionAPI() {
  
  const {question,option,is_correctAnswer,portion,hint,handleSubmit,id,
  setHint,setPortion,setQuestion}=useAPIContext()
   console.log("id",id) 
  return (
    <div className='container'> 

        <button className='GoBackBtn'><Link  to='/'><BsArrowLeft/> Take Quiz</Link></button>
        <h4 className='q_number'>Question number:  <span className="id_num"> {id}</span></h4>
        <form className='form_container' onSubmit={handleSubmit}>
          <label>
            Question:
          </label>
          <input className='form_input'  size="120" type="text" value={question} onChange={e => setQuestion(e.target.value)} />
          
          <h5>OPTIONS</h5>
          <div className="option">
            <label>
            Option 1:
            </label>
            <input type="text"  size="120" className='form_input'  onChange={e => option.option1=e.target.value} required />
            Is correct?
            <input className='input_checkbox' type="checkbox" name="correctOption" onChange={e => is_correctAnswer.option1=e.target.checked}/>
          </div>
        
        <div className="option">
          <label>
            Option 2:
          </label>
            <input type="text"  size="120"  className='form_input'onChange={e => option.option2=e.target.value} required />
            Is correct?
            <input className='input_checkbox' type="checkbox" name="correctOption" onChange={e => is_correctAnswer.option2=e.target.checked} />
        </div>
        
        <div className="option">
          <label>
            Option 3:
            </label>
            <input type="text"  size="120"  className='form_input'onChange={e => option.option3=e.target.value} required />
            Is correct?
            <input className='input_checkbox' type="checkbox" name="correctOption"  onChange={e => is_correctAnswer.option3=e.target.checked} />
        </div>
        
        <div className="option">
          <label>
            Option 4:
          </label>
            <input type="text"  size="120" className='form_input'  onChange={e => option.option4=e.target.value} required />
            Is correct?
            <input className='input_checkbox' type="checkbox" name="correctOption"  onChange={e => is_correctAnswer.option4=e.target.checked} />
        </div>

        <label>
            Portion:
            <input type="text" className='form_input misc' value={portion} onChange={e => setPortion(e.target.value)} />
        </label>
            
        <label>
            Hint:
            <input type="text"className='form_input misc' value={hint} onChange={e => setHint(e.target.value)} />
         
        </label>
           
        
          <input  className=' submit_btn' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default QuestionAPI