import React, { useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'
import { FaHeart, FaRegHeart, FaTextHeight } from 'react-icons/fa'
import { FaRegMessage } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import CommentBox from './components/CommentBox';


const data = [
    {
        id:1,
        user:'Tony Stark',
        text:'Cool Picture!',
        replies:[
            {
                id:2,
                user:'Steve Rogers',
                text:'Place looks Cool af!'
            },
            {
                id:3,
                user:'Tony Stark',
                text:'Language Caps!',
                replies:[
                    {
                        id:4,
                        user:'Natasha',
                        text:'Hahahaha!'
                    },
                ]
            },
        ]
    },
    {
        id:5,
        user:'Jon Snow',
        text:'Cool Picture Anurag!'
    },
    {
        id:6,
        user:'Bruce Wayne',
        text:'Beautiful Picture',
        replies:[
            {
                id:7,
                user:'Joker',
                text:'Hahahaha'
            },
        ]
    },
    
]


export default function Index() {
    const [commentsState,setCommentsState] = useState(false)
    return (
    <CenteredLayout>
        <div className='w-1/3'>
            <div className='border border-gray-200 flex flex-col'>
                <div className='w-full flex flex-row justify-between items-center p-4'>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <img src="https://www.anuraggharat.tech/_next/image?url=%2Fimages%2Fanurag.jpg&w=256&q=75" className='w-14 h-14 rounded-full' alt="" />
                        <div className='flex flex-col justify-center'>
                        <p className='text-base font-semibold'>Anurag Gharat</p>
                        <p className='text-xs text-gray-600'>Mumbai, India</p>
                        </div>
                    </div>
                    <div>
                        <p>2 Hours ago</p>
                    </div>
                </div>
                <div className='w-full'>
                    <img 
                        src="https://images.pexels.com/photos/8990788/pexels-photo-8990788.jpeg?auto=compress&cs=tinysrgb&w=800" className='w-full h-auto' alt=""/>
                </div>
                <div className='p-4 flex flex-col gap-2'>
                    <div className='flex flex-row gap-2'>
                        <FaRegHeart />
                        <FaRegMessage />
                        <FiSend />
                    </div>
                    <div>
                        <p>830 people liked this post.</p>
                    </div>
                    <div>
                        <p className='text-blue-500 text-sm' onClick={()=>setCommentsState(!commentsState)}>{commentsState ? 'Close Comments' : 'Read Comments'}</p>
                    </div>
                    <div>
                        {commentsState && data.map((comment)=>(
                            <CommentBox comment={comment} key={comment.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </CenteredLayout>
  )
}
