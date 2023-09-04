import { createContext,useContext,useEffect,useState } from "react";
import { API_URL } from '../constants'
const DataContext = createContext()

export const DataProvider=({children})=>{
    const [startQuiz,setStartQuiz]=useState(true)
  const [data, setData] = useState('');
  const[questNum,setQuestNum]=useState('')

  useEffect(()=>{
    async function fetchdata(){
      const res= await fetch(API_URL)
      const data=await res.json()
      console.log(data)
      const num=data[data.length-1].id
      console.log("data",data,"num",num)
      setData(data)
      setQuestNum(num+1)
    }
    fetchdata();
  },[])

  return (
        <DataContext.Provider value={{startQuiz,questNum,data}}>
            {children}
        </DataContext.Provider>
)}

export default DataContext
export const useGlobalContext=()=>{
    return useContext(DataContext)
}