import React, { useEffect, useState } from 'react'

export default function Index() {

  const[value,setValue] = useState<number>(0)
  const[isDone,setIsDone] = useState<Boolean>(false)
  let id:number;

  useEffect(()=>{
    id = setInterval(()=>{
        setValue((value)=>value+1)
    },100)

    return () => clearInterval(id)
  },[])

  useEffect(()=>{
    setValue(Math.min(Math.max(value,0),100))
    if (value >= 100) {
        setIsDone(true)
    }
  },[value])

  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
        <div className='w-1/2 flex flex-col justify-center items-center gap-4'>
            <div className='w-full relative bg-slate-50 border border-gray-500 h-12 rounded-full overflow-hidden'>
                <div className='absolute  text-center top-0 left-0 bg-green-500 h-full  transition-all ease-in-out duration-300' style={{width:`${value}%`}}></div>
                    <span 
                    className={` absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 mx-auto ${value > 49 ? 'text-white' : 'text-black'}`}>
                        {value}%
                    </span>
                </div>
            <p>{isDone ? 'Loaded' : 'Loading'}</p>
        </div>
    </div>
  )
}
