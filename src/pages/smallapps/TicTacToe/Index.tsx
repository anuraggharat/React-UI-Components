import { useEffect, useState } from 'react'
import Cell from './components/Cell'
const xPlayer = 'X'
const oPlayer = 'O'

export default function Index() {
  const [values,setValues] = useState<(string|null)[]>(Array(9).fill(null))
  const [xPlaying,setXPlaying] = useState<boolean>(true)
  const [winner,setWinner] = useState<string|null>(null)
  const [draw,setDraw] = useState<boolean>(false)
  const [wonBoxes,setWonBoxes] = useState<number[]>([])

  const winningCombination = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6], 
  ]

  const handleClick = (idx:number) =>{
        const temp: (string | null)[] = [...values]
        if (xPlaying) {
            temp[idx] = xPlayer
        }else{
            temp[idx] = oPlayer
        }
        setValues(temp)
        setXPlaying(!xPlaying)
  }

  const resetBoard = () =>{
    setValues(Array(9).fill(null))
    setWinner(null)
    setXPlaying(true)
    setDraw(false)
    setWonBoxes([])
  }


  const identifyWinner = () =>{  
        for (let i = 0; i < winningCombination.length; i++) {
            const [a,b,c] = winningCombination[i]
            if (values[a] !== null && values[a] === values[b] && values[a] === values[c]) {
                setWinner(values[a])
                setWonBoxes([a,b,c])
                return 
            }
        }
        if(values.every(item => item !== null)){
            setDraw(true)
        }
  }

  useEffect(()=>{
    identifyWinner()
  },[xPlaying])

  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-full bg-[#121212]'>
        <div className='p-10'>
            {winner && !draw && <p className='text-white text-2xl'>Winner is {winner}!</p>}
            {!winner && !draw && <p className='text-white text-2xl'>{`${xPlaying ? xPlayer : oPlayer} is playing`}</p>}
            {draw && <p className='text-white text-2xl'>Match ended in Draw!</p>}
        </div>
        <div className='w-[33rem] h-[33rem] flex flex-row justify-around flex-wrap items-center'>
            {values.map((item,index)=><Cell idx={index} value={item} key={index} handleClick={handleClick} winner={winner} wonBoxes={wonBoxes} />)}
        </div>
        <div className='mt-10'>
            <button className='bg-[#222] py-4 px-6 rounded-md text-xl text-white ' onClick={resetBoard}>Reset Board</button>
        </div>
    </div>
  )
}
