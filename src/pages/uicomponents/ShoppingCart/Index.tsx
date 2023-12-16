import React, { useEffect, useReducer, useState } from 'react'
import Card from './components/Card'
import CartSlider from './components/CartSlider'


export interface Product{
  id:string,
  thumbnail:string,
  title:string,
  brand:string,
  price:number,
  description:string,
  quantity?:number
}
interface Cart{
  products:Product[],
  total:number
}

const initialState:cart = {
  products:[],
  total:0
}


function reducer(initialState:Cart,action:any){
  switch (action.type) {
    case 'ADD_TO_CART':
      const temp:Product[] = [...cart,{...product,quantity:1}]
        setCart(temp)
        if (!slider) {
          setSlider(true)
        }
      break;
    case 'UPDATE_TO_CART':
      
      break;
    case 'DELETE_FROM_CART':
      
      break;
    case 'ADD_TO_CART':
      
      break;
  
    default:
      break;
  }
}


export default function ShoppingCart() {

    const [products,setProducts] = useState<Product[]>([])
    //const [cart,setCart] = useState<Product[]>([])
    const [slider,setSlider] = useState(false)
    const [cart, dispatch] = useReducer(reducer,initialState)

    async function fetchProducts(){
        try {
            const res = await fetch('https://dummyjson.com/products?limit=20')
            const data = await res.json()
            setProducts(data.products)            
        } catch (error) {
            alert("Error")
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[])

    function addToCart(product:Product):void{
        
    }
    function updateCart(product:Product,increment:boolean=true){
      const temp:Product[] = [...cart]
        temp.forEach(item=>{
          if (item.id === product.id && item.quantity) {
            if (increment && item.quantity < 10 ) {
              item.quantity = item.quantity + 1
            }else if(!increment && item.quantity > 1){
              item.quantity = item.quantity - 1
            }
          }
        })
        setCart(temp)
      }

    function deleteFromCart(id:string){
        const temp:Product[] = [...cart]
        const updatedProducts:Product[] = temp.filter(item=>item.id !== id)
        setCart(updatedProducts)
    }

    return (
        <div className='bg-white min-h-screen relative p-12 lg:px-32 flex flex-col items-center'>
            
            <div className='flex flex-row gap-3 flex-wrap mt-20'>
                {products.map((item:Product)=>(
                    <Card item={item} key={item.id} addToCart={addToCart} />
                ))}
            </div>
            {slider &&  <CartSlider cartItems={cart} deleteProduct={deleteFromCart} updateCart={updateCart}/>}

        </div>
  )
}
