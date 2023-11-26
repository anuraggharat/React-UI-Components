import React, { useState } from 'react'
import { IoIosArrowForward,IoIosArrowDown } from "react-icons/io";


export default function DataItem({entry,depth=1}) {
    const [expanded,setExpanded] = useState(false)
    const symbol = expanded ?  <IoIosArrowDown className='mt-1'/> : <IoIosArrowForward  className='mt-1'/>

    return (
        <div className={`px-8 py-4 bg-slate-100`}>
            <div className='text-xl flex flex-row items-center' onClick={()=>setExpanded(!expanded)}>
                {entry?.children ? symbol : ""} 
                <span>{entry.name}</span>
                </div>
            {entry?.children && expanded ?  entry?.children.map((entry,key)=>(<DataItem key={key} entry={entry} depth={depth + 1} />)): null }
        </div>
)
}
