import React from 'react'

import {AiOutlineCheck} from "react-icons/ai"
import {RxCross2} from "react-icons/rx"
import tick from "../images/tick.png"
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const Results = ({grade,data}) => {
  function reload(){
    window.location.reload()
    }
    return (
     <>
   
      <Link  className='GoBackBtn '  onClick={reload}><BsArrowLeft/> Take Quiz Again</Link>
      
     
    <div className="result-container">
      <div className="gradetotal">
        <img className='tickimage' src={tick} alt="" />
        <h4 className='grade_mark_result'> {grade} of {data.length}</h4>
      </div>    {data.map((el)=>{
          return(
           <div  className='result-questions'>            
              <h3 className='res_question'>{el.question}</h3>
              {el.options.map(({option,is_correct,selected})=>{
                return <div className={selected?(
                  is_correct? (" correct_res result_options"):(" wrong-res result_options")
                ):(is_correct?("correct_res result_options"):"result_options")}>
                  {option}{is_correct?< AiOutlineCheck  className='icontrue'/>: selected && <RxCross2 className='iconfalse'/>}
                 
                  </div>
              })}            
             <hr />
           </div>
          )
         })}
         
    </div>
    </> 
  )
}

export default Results


// AiOutlineCheck
// RxCross2