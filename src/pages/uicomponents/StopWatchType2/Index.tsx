import React, { useEffect, useRef, useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'

export default function Index() {
  let id:any = useRef(null);
  const [time,setTime] = useState(7190)
  const [isRunning,setIsRunning] = useState(false)


  useEffect(()=>{
    if (isRunning) {
      id.current = setInterval(()=>{
        setTime(time=>time+1)
      },1000)      
    }

    return ()=>{
      clearInterval(id.current)
    }
  },[isRunning])


  const toggleTimer = () =>{
    setIsRunning(!isRunning)
  }
  const resetTimer = () =>{
    setIsRunning(!isRunning)
    setTime(0)
  }

  
  const formatTime = () =>{
    let hours = Math.floor(time / 3600)
    let minutes = time > 3599 ? Math.floor((time % 3600)/60) : Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    const providePadding = (num:number) => num < 10 ? '0' + num : num
    return `${providePadding(hours)}:${providePadding(minutes)}:${providePadding(seconds)}`
  }
  
  return (
    <CenteredLayout>
      <div className='w-96'>
        <div  className='border border-gray-600 py-10 mt-40 text-7xl  text-center tracking-widest '>
        {formatTime()}
        </div>
        <div className='border border-gray-600 flex flex-row justify-between border-t-0 w-full'>
        <button className='w-1/2 py-5' onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
        <button className='w-1/2 py-5 text-white bg-gray-600' onClick={resetTimer}>Reset</button>
      </div>
      </div>
      
    </CenteredLayout>
  )
}
