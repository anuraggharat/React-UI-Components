import React, { useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'

const data = [
    {
        id:0,
        title:'Tab one',
        text:"Tab one -Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    },
    {
        id:1,
        title:'Tab two',
        text:"Tab two -Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    },
    {
        id:2,
        title:'Tab three',
        text:"Tab three -Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    }
]


export default function Index() {
  
    const [active,setActive] = useState(1)
  
    return (
    <CenteredLayout>
        <div className='border border-gray-300 w-1/2 bg-slate-100 p-10'>
            <div className='flex flex-row justify-start'>
                {data.map(item=>(
                    <button disabled={active === item.id} onClick={()=>setActive(item.id)} className={` text-purple-800 p-4 ${active === item.id ? 'bg-white' : 'bg-slate-100'}`} key={item.id}>{item.title}</button>
                ))}
            </div>
            <div className='w-full bg-white p-4'>{data[active].text}</div>
        </div>
    </CenteredLayout>
  )
}
