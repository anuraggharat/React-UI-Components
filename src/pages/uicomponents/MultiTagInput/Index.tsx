import React, { ChangeEvent, useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'
import Tag from './components/Tag'

export default function Index() {

    const [text,setText] = useState<string | number>('')
    const [tags,setTags] = useState<(string|number)[]>(['react'])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value)
    }

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && text !== '') {
          const temp: (string|number)[] = [...tags];
          temp.push(text);
          setTags(temp);
          setText('');
        }
      };

    const handledelete = (text:string) =>{
        setTags(tags.filter(tag=>tag!==text))
    }

  return (
    <CenteredLayout>
        <div className='w-1/3 flex flex-col gap-4'>
            <input type="text" 
                className='p-4 border border-gray-400 w-full rounded-md' 
                placeholder='Type here' 
                onChange={handleChange}
                value={text}
                onKeyDown={handleEnter}
            />
            <div className='flex flex-row gap-2 flex-wrap'>
                {tags.map((tag,index)=><Tag key={index} item={tag} handleDelete={handledelete}></Tag>)}
            </div>
        </div>
    </CenteredLayout>
  )
}
