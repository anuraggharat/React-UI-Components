import React from 'react'

export default function PageButton({value,handlePage,page}:any) {
  return (
    <li className={`p-2 px-4 border-[1px] border-gray-200 ${page===value ? 'bg-purple-600 text-white' : null}`} onClick={()=>handlePage(value)} >{value}</li>
  )
}
