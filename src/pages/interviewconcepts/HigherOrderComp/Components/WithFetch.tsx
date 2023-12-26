import { useEffect, useState } from 'react'

export default function withFetch(Component:any,url:string) {

  return function(){

    const [data,setData] = useState([])
  
    async function fetchData(){
        const res = await fetch(url)
        const jsonRes = await res.json()
        setData(jsonRes)
    }
    
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div>
            <Component data={data} />
        </div>
    )
  }
  
    
}
