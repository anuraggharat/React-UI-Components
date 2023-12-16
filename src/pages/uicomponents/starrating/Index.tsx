import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";


export default function Index() {
    const [stars,setStars] = useState(0)

  return (
    <div className='flex flex-col justify-center min-h-screen w-full'>
        <div className='w-1/2 m-auto text-center text-5xl gap-10 flex flex-col'>
            <div>
                <p>Rate us out of 5 stars!</p>
            </div>
            <div className='flex text-center items-center flex-row justify-center'>
            {Array(5).fill(0).map((item,index)=>(
                <button onClick={()=>setStars(index+1)}>
                    <FaStar key={index} color={`${index < stars ? 'red' : 'gray'}`} className='text-7xl hover:scale-110 overflow-hidden' />
                </button>
            ))}

            </div>
        </div>
    </div>
  )
}
