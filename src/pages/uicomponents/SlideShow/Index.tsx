import React, { useEffect, useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const images = [
    "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/161293/prambanan-temple-java-hinduism-161293.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1089302/pexels-photo-1089302.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/189833/pexels-photo-189833.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800"
]

export default function Index() {

    const [active,setActive] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
          setActive((prevActive) => (prevActive + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval);
      }, []);

  return (
    <CenteredLayout>
        <div className='w-2/3 flex flex-row justify-between items-center gap-4'>
            <button className='p-4 border border-gray-200 flex flex-row justify-center items-center rounded-full  text-2xl' onClick={()=>setActive((active)=>((active===0 ? 5-1 : active - 1)%images.length))}><FaArrowLeft/></button>
            <img src={images[active]} className='w-4/5 h-[600px] object-cover' />
            <button className='p-4 border border-gray-200 flex flex-row justify-center items-center rounded-full text-2xl' onClick={()=>setActive((active+1)%images.length)}><FaArrowRight/></button>
        </div>
    </CenteredLayout>
  )
}
