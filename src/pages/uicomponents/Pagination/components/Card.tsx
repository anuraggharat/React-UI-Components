import React from 'react'

export default function Card({item}:any) {
  return (
    <div className='lg:w-1/5 md:w-1/3 w-1/2 mx-4 border bg-white border-gray-300 rounded-md overflow-hidden'>
        <img src={item.thumbnail} alt={item.title} className='w-full h-40'/>
        <div className='flex flex-row justify-between p-2'>
        <div>
        <h2 className='text-nase'>{item.title}</h2>
        <p className='text-xs text-gray-500'>{item.brand}</p>
        </div>
        <div>
        </div>
        <h2>{item.price}</h2>
        </div>
        <div className='p-2 text-xs'>
        <p>{item.description}</p>
        </div>
    </div>
  )
}
