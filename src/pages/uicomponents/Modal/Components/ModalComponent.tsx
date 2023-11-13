import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import Button from '../../../../components/Button'

interface ModalComponentPropTypes{
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalComponent({setModal}:ModalComponentPropTypes) {
  return (
    <div className='fixed top-0 left-0 min-w-full min-h-screen bg-gray-500 bg-opacity-75'>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-sm bg-white flex flex-col gap-10 items-center text-center p-12'>
        <BsCheck2Circle className='text-4xl text-green-600' />
        <div className='flex flex-col items-center gap-4'>
            <h2 className='text-lg font-semibold'>Your Order was successful</h2>
            <p className='text-gray-800 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
            </p>
            <Button text='Check orders' handler={()=>setModal(false)}  />
        </div>
    </div>
    </div>
  )
}
