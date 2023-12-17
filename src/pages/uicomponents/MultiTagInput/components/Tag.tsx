import React from 'react'

export default function Tag({item,handleDelete}:any) {
  return (
    <div className='w-auto flex flex-row gap-4 justify-between items-center px-4 py-2 rounded-md bg-purple-100 text-purple-700 font-bold' >
        <span>{item}</span>
        <button className='text-black text-sm' onClick={()=>handleDelete(item)}>X</button>
    </div>
  )
}
