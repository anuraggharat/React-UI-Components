import React, { useEffect, useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'

export default function Index() {
    
    const [products,setProducts]=useState<any[]>([])
    const [skip,setSkip]=useState(0)
    const [isLoading,setIsLoading] = useState(false)


    async function fetchProducts(){
       setIsLoading(true) 
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,thumbnail`)
            const data = await res.json()
            console.log(data.products);
            let temp:any[] = [...products,...data.products]
            setProducts(temp)            
        } catch (error) {
            console.log(error);
            
        }finally{
            setSkip(skip=>skip+10)
            setIsLoading(false)
        }
    }

    
    useEffect(()=>{
        fetchProducts(skip)
    },[])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
          return;
        }
        fetchProducts();
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);


  return (
    <CenteredLayout>
        <div className='w-1/2 pt-10 m-auto grid grid-cols-2 gap-4'>
            {products.map(product   =>  (<div key={product?.id} className='mb-10'>
                <img src={product?.thumbnail} className='w-full h-72 object-cover' alt=""  />
                <p>{product.title}</p>
            </div>))}
            <div    className='mt-10 text-center text-2xl'>
            {isLoading && <h1>Loading</h1>}
            </div>
        </div>
    </CenteredLayout>
  )
}
