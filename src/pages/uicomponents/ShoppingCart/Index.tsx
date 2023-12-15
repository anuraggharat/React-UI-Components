import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import PageButton from './components/PageButton'

export default function ShoppingCart() {

    const [products,setProducts] = useState([])
    const [page,setPage] = useState(1)


    async function fetchProducts(){
        try {
            const res = await fetch('https://dummyjson.com/products?limit=100')
            const data = await res.json()
            setProducts(data.products)            
        } catch (error) {
            alert("Error")
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[page])


    const handlePage=(newPage:number)=>{
        if(newPage <1 || newPage > 10){
            return 
        }
        setPage(newPage)
    }

    console.log(page)
    return (
        <div className='bg-white min-h-screen p-12 lg:px-32 flex flex-col items-center'>
            <div className='mt-20'>
                <ul className='flex row justify-between items-center w-full gap-0'>
                    <li className='p-2 px-4 border-[1px] border-gray-200' onClick={()=>handlePage(page-1)}>
                    {"<"}
                    </li>
                    {[...Array(10).fill(1).map((_,index)=>index+1)].map((value)=><PageButton value={value} key={value} handlePage={handlePage} page={page} />)}
                    <li className='p-2 px-4 border-[1px] border-gray-200' onClick={()=>handlePage(page+1)}>
                    {">"}
                    </li>
                </ul>
            </div>
            <div className='flex flex-row gap-3 flex-wrap mt-20'>
                {products.slice(page*10-10,page*10).map((item:any)=>(
                    <Card item={item} key={item.id} />
                ))}
            </div>

        </div>
  )
}
