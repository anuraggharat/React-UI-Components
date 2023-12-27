import React, { ChangeEvent, useCallback, useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'


export default function Page() {

    const [text, setText] = useState<string>("")
    const [suggestions, setSuggestions] = useState<string[]>([])

    const fetchProducts = async(product:string) =>{        
       const res = await fetch(`https://dummyjson.com/products/search?q=${product}`)
       const jsonRes = await res.json()
       console.log(jsonRes);
       setSuggestions(jsonRes.products)
       
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setText(()=>e.target.value)
        debouncedSearch(e.target.value)
    }

    const debounce = (fn: (product: string) => void, delay: number) => {
        let id: number | undefined;
      
        return function (...args: any[]) {
          if (id) {
            clearTimeout(id);
          }    
          id = setTimeout(() => {
            fn(...args);
          }, delay);
        };
      };
      

    const debouncedSearch = useCallback((product: string) => debounce(fetchProducts, 1000)(product), []);


  return (
    <CenteredLayout>
        <div className='flex flex-col'>
            <input type="text" className='p-4 border border-gray-400 w-96 rounded-md' 
            placeholder='Enter your state name' value={text} onChange={handleChange}/>
            <div className={`w-full bg-gray-50 flex flex-col mt-6 rounded-md overflow-scroll ${suggestions.length === 0 ? 'h-auto' : 'max-h-64' }`}>
                {suggestions.map(suggestion=>(
                    <p key={suggestion.id} className='px-4 py-4 hover:bg-white' >
                    {suggestion.title}
                </p>
                ))}
            </div>
        </div>
    </CenteredLayout>
  )
}
