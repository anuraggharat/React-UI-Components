import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import Button from '../../../../components/Button'

interface ModalComponentPropTypes{
    modal:boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SlideModalComponent({modal,setModal}:ModalComponentPropTypes) {
  return (
        <div className={`fixed -mt-[120vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-sm bg-white flex flex-col gap-10 items-center 
        text-center p-12 transition-all duration-200 ease-in-out  ${modal ? 'mt-0' : '' }`}>
        <BsCheck2Circle className='text-6xl text-green-600' />
        <div className='flex flex-col items-center gap-4'>
            <h2 className='text-lg font-semibold'>Your Order was successful</h2>
            <p className='text-gray-800 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
            </p>
            <Button text='Go Back' handler={()=>setModal(false)}  />
        </div>
    </div>
  )
}
