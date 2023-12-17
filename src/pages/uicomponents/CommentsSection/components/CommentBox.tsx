import React, { useState } from 'react'

export default function CommentBox({comment}:any) {
    const [loadReplies,setLoadReplies] = useState(false)
    const [reply,setReply] = useState(false)
    const [replyValue,setReplyValue] = useState("")


    const addReply = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && replyValue){
          comment.replies.push({
            id:Date.now(),
            user:'Anurag Gharat',
            text:replyValue
          })
          setReplyValue("")
          setLoadReplies(true)
          setReply(false)  
        }
    }
    
  return (
    <div className='pl-4'>
        <p className='text-gray-900 text-base'>{comment.user}</p>
        <p className='text-xs text-gray-600'>{comment.text}</p>

       <div className='flex flex-row gap-4'>
       {comment.replies && <p onClick={()=>setLoadReplies(!loadReplies)} className='text-xs text-blue-500'>{loadReplies ? 'Close Replies' : 'Read Replies'}</p>}
        <p onClick={()=>setReply(!reply)} className='text-xs text-blue-500'>Add Reply</p>
       </div>
    {reply &&  <input type='text' onKeyDown={addReply} name='text' value={replyValue} className='border border-gray-200 text-xs p-1 w-1/2 mt-2' onChange={(e)=>setReplyValue(e.target.value)} />}
        {loadReplies && comment?.replies && comment?.replies.map((reply:any)=>(
            <CommentBox comment={reply} key={reply.id} />
        ))}
    </div>
  )
}
