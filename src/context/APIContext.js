import { createContext,useContext,useEffect,useState } from "react";
import { useGlobalContext } from "./DataContext";
const APIContext = createContext()

export const APIProvider=({children})=>{
    const {questNum}=useGlobalContext()
    const [question, setQuestion] = useState('');
    const [option, setOption] = useState(
      {option1:"",option2:"",option3:"",option4:"",});
    const [is_correctAnswer,setIs_correctAnswer]=useState(
      {option1:false,
      option2:false,
      option3:false,
      option4:false,
    })
    const [portion, setPortion] = useState('');
    const [hint, setHint] = useState('');
    const id=questNum
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("clicked")
        const optionArray=[
    {"option": option.option1, "is_correct": is_correctAnswer.option1, "selected": false},
    {"option": option.option2, "is_correct": is_correctAnswer.option2, "selected": false},
    {"option": option.option3, "is_correct": is_correctAnswer.option3, "selected": false},
    {"option": option.option4, "is_correct": is_correctAnswer.option4, "selected": false}
 
        ]
        
        const data={id:id,question:question,options:optionArray,portion:portion,hint:hint}
      const url="http://localhost:8000/api/questions/"
      fetch(url,{method: "POST",
      headers: {
             'Content-type': 'application/json',
                },
      body:JSON.stringify(data)}
      
      ).catch(err=>console.log(err))
        
      window.location.reload()
    
    }
  
    return(
        <APIContext.Provider value={{question,setQuestion,
                                portion,setPortion,
                                option,
                                hint,setHint,
                                id,is_correctAnswer,handleSubmit}}>
            {children}
        </APIContext.Provider>
    )
}
export default APIContext
export const useAPIContext=()=>{
    return useContext(APIContext)
}