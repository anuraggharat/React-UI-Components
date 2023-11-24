import React, { useState } from 'react'

export default function DataItem({entry,depth=1}) {
    const [expanded,setExpanded] = useState(false)
    const symbol = expanded ? '-' : '+'
return (
    <div className={` bg-slate-100 border-[1px] border-gray-300 ml-${depth*4}`}>
        <p onClick={()=>setExpanded(!expanded)} >{entry?.children ? symbol : ""} {entry.name}</p>
        {entry?.children && expanded ?  entry?.children.map((entry,key)=>(<DataItem key={key} entry={entry} depth={depth + 1} />)): null }
    </div>
)
}
