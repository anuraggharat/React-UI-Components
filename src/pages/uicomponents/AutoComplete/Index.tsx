import React, { ChangeEvent, useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'

let states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

export default function Index() {

    const [text, setText] = useState<string>("")
    const [suggestions, setSuggestions] = useState<string[]>([])

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value)
        let temp:string[] = []
        states.forEach(state=>{
            if(state.substring(0,e.target.value.length) === e.target.value){
                temp.push(state)
            }
        }) 
        setSuggestions(temp)
    }

    const onActive = () =>{
        if(!text) setSuggestions([...states])
        return
    }

    const selectValue = (value: string) => {
        setText(value);
        setSuggestions([]);
      };
      


  return (
    <CenteredLayout>
        <div className='flex flex-col'>
            <input onFocus={onActive} type="text" className='p-4 border border-gray-400 w-96 rounded-md' 
            placeholder='Enter your state name' value={text} onChange={handleChange}/>
            <div className={`w-full bg-gray-50 flex flex-col mt-6 rounded-md overflow-scroll ${suggestions.length === 0 ? 'h-auto' : 'max-h-64' }`}>
                {suggestions.map(suggestion=>(
                    <p key={suggestion} className='px-4 py-4 hover:bg-white' onClick={() => selectValue(suggestion)}>
                    {suggestion}
                </p>
                ))}
            </div>
        </div>
    </CenteredLayout>
  )
}
