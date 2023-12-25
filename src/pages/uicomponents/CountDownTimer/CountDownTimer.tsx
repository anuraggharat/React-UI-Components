import React, { useEffect, useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'

export default function CountDownTimer() {
    


    let calculateTime = () => {
        const currentTime:any = new Date()
        const nextYear:any = new Date(currentTime.getFullYear() + 1, 0, 1, 0, 0, 0);
        const timeremaining:number = nextYear - currentTime

        let days = Math.floor(timeremaining/(1000 * 60 * 60 * 24))
        let hours = Math.floor((timeremaining%(1000 * 60 * 60 * 24))/(1000*60*60))
        let minutes = Math.floor((timeremaining%(1000 * 60 * 60))/(1000*60))       
        let seconds = Math.floor((timeremaining%(1000 * 60))/(1000))      

        return {days,hours,minutes,seconds}
    }  
 
    const [time,setTime] = useState(calculateTime())


    useEffect(() => {
        const interval = setInterval(()=>{
            setTime(calculateTime())
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])

  return (
    <CenteredLayout>
        <div className='flex flex-col w-1/2 justify-center min-h-screen text-center'>
                 <div className='text-center text-8xl mb-20'>
                    <h1>Time for New Year</h1>
                </div>
            <div className='flex flex-row w-full text-7xl font-bold'>               
                <div className="flex justify-center w-1/4">{time.days}</div>
                <div className="flex justify-center w-1/4">{time.hours}</div>
                <div className="flex justify-center w-1/4">{time.minutes}</div>
                <div className="flex justify-center w-1/4">{time.seconds}</div>
            </div>
            <div className='flex flex-row font-light text-2xl'>
                <div className="flex justify-center w-1/4">Days</div>
                <div className="flex justify-center w-1/4">Hours</div>
                <div className="flex justify-center w-1/4">Minutes</div>
                <div className="flex justify-center w-1/4">Seconds</div>


            </div>

        </div>
    </CenteredLayout>
  )
}
