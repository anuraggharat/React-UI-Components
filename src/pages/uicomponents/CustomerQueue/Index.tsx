import React, {  useEffect, useState } from 'react'

export default function Index() {

    const [value,setValue] = useState<string>("")
    const [lines,setLines] = useState([[3,1,6],[1,4,2],[2],[7,5,1],[3,6]])
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value)  
    }
    
    function addToQueue(e:React.ChangeEvent<HTMLFormElement>):void{
        e.preventDefault();
        const temp = [...lines]
        let minLineIndex:number = 0
        let minLineSum:number = Number.MAX_SAFE_INTEGER
        for(let lineIndex in temp){
            let sum = temp[lineIndex].reduce((acc,curr)=> acc + curr, 0)
            //debugger
            if (sum < minLineSum) {
                minLineSum = sum
                minLineIndex = parseInt(lineIndex)
            }
        }
        if (!isNaN(parseInt(value))){
            temp[minLineIndex].push(parseInt(value))
        }
        setLines(temp)
        setValue("")
    }


    function checkoutTopLines(){
        setLines(
            (prevLines) => (
                prevLines.map(
                    line => ( line[0] > 0 ? [line[0]-1,...line.slice(1)] : [...line.slice(1)]))))
    }

    useEffect(()=>{
    const interval = setInterval(()=>{
        checkoutTopLines()
       },1000)
    return ()=>{
        clearInterval(interval)} 
    },[])
  

  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center '>
        <form className='w-1/3 bg-slate-400 flex flex-row' onSubmit={addToQueue}>
            <input
                className='p-2 px-6 border border-gray-500 flex-1'
                value={value}
                onChange={handleChange}
                type='string'
            />
            <button type='submit' className='p-2 border border-gray-500'>Add</button>
        </form>
        <div className='flex flex-row gap-3 mt-4'>
            {lines.map((line,idx)=>(
                <div key={idx} className='flex flex-col gap-2'>
                    {line.map((customer,idx)=>(
                        <div key={idx} className='text-4xl font-mono p-8 text-center bg-slate-200'>{customer}</div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}
