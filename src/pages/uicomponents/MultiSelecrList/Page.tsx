import React, { useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'
import { FaCaretRight } from 'react-icons/fa6'
import { FaCaretLeft } from 'react-icons/fa6'

const list = [
  "HTML","CSS","JavaScript","React","Next.js"
]

export default function Page() {

  const [options,setOptions] = useState<string[] | []>(list)
  const [selected,setSelected] = useState<string[] | []>([])

  const selectOption = (option:string) => {
    const tempOptions:string[] | [] = options.filter(item=>item !== option)
    const tempSelected:string[] | [] = [...selected,option]
    setOptions(tempOptions)
    setSelected(tempSelected)
  }

  const deSelectOption = (option:string) => {
    const tempSelected:string[] | [] = selected.filter(item=>item !== option)
    const tempOptions:string[] | [] = [...options,option] 
    setOptions(tempOptions)
    setSelected(tempSelected)
  }

  const selectAll = () =>{
    const tempSelected:string[] | [] = [...selected,...options]
    const tempOptions:string[] | [] = [] 
    setOptions(tempOptions)
    setSelected(tempSelected)
  }

  const deselectAll = () =>{
    const tempOptions:string[] | [] = [...selected,...options]
    const tempSelected:string[] | [] = [] 
    setOptions(tempOptions)
    setSelected(tempSelected)
  }

  return (
    <CenteredLayout>
      <div className='border border-gray-200 p-4 w-full flex flex-row mt-20 h-72'>
        <div className='w-2/5 min-h-full bg-gray-100 p-4'>
          <ul className='flex flex-col gap-4'>
            {options.map((item)=>(
              <li key={item} onClick={()=>selectOption(item)}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='w-1/5 min-h-full  flex flex-col gap-3 justify-center items-center'>
            <button onClick={selectAll} className='border border-gray-300 p-2 w-auto'>
              <FaCaretRight />
            </button>
            <button onClick={deselectAll} className='border border-gray-300 p-2 w-auto'>
              <FaCaretLeft />
            </button>
        </div>
        <div className='w-2/5 min-h-full bg-gray-100 p-4'>
        <ul className='flex flex-col gap-4'>
          {selected.map((item)=>(
            <li key={item} onClick={()=>deSelectOption(item)}>{item}</li>
          ))}
          </ul>
        </div>
      </div>
    </CenteredLayout>
  )
}
