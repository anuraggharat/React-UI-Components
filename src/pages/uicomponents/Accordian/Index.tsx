import React, { useState } from 'react'
import { FaArrowDown,FaArrowUp } from 'react-icons/fa';

const data = [
    {
      id: 1,
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      question: "How much does Netflix Cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      id: 4,
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
  ];




export default function Index() {
  const [actives, setActives] = useState<number[]>([])

  const handleClick=(idx:number)=>{
    const temp:number[]  = [...actives]
    if (temp.includes(idx)) {
        const newValues = temp.filter(i=>i!==idx)
        setActives(newValues)
    }else{
        temp.push(idx)
        setActives(temp)
    }

  }
  return (
    <div className='min-h-screen w-full flex flex-row justify-center pt-10'>
        
        <div className='w-1/2 flex flex-col gap-10'>
        <h1>FAQs of Netflix</h1>
            {data.map((item,idx)=>(
                <div className='flex flex-col w-full gap-4' key={idx} onClick={()=>handleClick(idx)}>
                    <div className='w-full relative flex justify-between'>
                        <span className='text-2xl font-semibold'>
                        {item.question}
                        </span>
                        <button>{actives.includes(idx) ? <FaArrowUp/> : <FaArrowDown/>}</button>
                    </div>
                    <div className={`${actives.includes(idx) ? 'h-auto  transition-all duration-500 ease-in-out' : 'h-0 overflow-hidden transition-all duration-500 ease-in-out'}`}>{item.answer}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
