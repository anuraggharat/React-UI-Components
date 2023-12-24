import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";


export default function Checkbox({item,values,handleCheck,parent}:any) {
    const [accordian,setAccordian] = useState(false)
  return (
   <>
    <div className='flex fle-row gap-3 m-4'>
        <input 
        type="checkbox" 
        id={item.make} 
        checked={values[item.make]} 
        onChange={()=>handleCheck(item,parent)} />
        <label htmlFor={item.make}>{item.make}</label>
        <button onClick={()=>setAccordian(!accordian)}>
            {item?.bucket && !accordian && <MdOutlineKeyboardArrowDown/>}
           {item?.bucket && accordian && <MdOutlineKeyboardArrowUp/>}
        </button>
    </div>
    <div className='ml-8'>
        {item?.bucket && accordian && item.bucket.map((child:any)=>(
        <Checkbox 
        key={child.id} item={child} 
        values={values}
        handleCheck={handleCheck} 
        parent={item}
        />))}
    </div>
   </>
  )
}
