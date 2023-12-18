import { useEffect, useState } from 'react'
import './App.css'
import ApplicationRouting from './ApplicationRouting'
import useCustomEffect from './hooks/useCustomEffect.ts'

function App() {

  const [count,setCount] = useState(0)
  const [count1,setCount1] = useState(10)
  useCustomEffect(()=>{
    console.log("Hi")

    return ()=>{
      console.log("removing")
    }
  },[count])

  return (
    <>
        <ApplicationRouting />
        <div>
          <div>{count}</div>
          <button onClick={()=>setCount(count+1)}>Add</button>
          <div>{count1}</div>
          <button onClick={()=>setCount1(count1+10)}>Add</button>
        </div>
        </>
  )
}



export default App
