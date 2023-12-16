import React from 'react'
import { Product } from '../Index'

export default function CartItem({
    cartItem,deleteProduct,updateCart}:{
    cartItem:Product,deleteProduct:(id:string)=>void,
    updateCart:(product:Product,increment:boolean)=>void
}){
  return (
    <div className='w-full flex justify-between'>
        <img src={cartItem.thumbnail} alt="" className='w-1/3'/>
        <div className='flex flex-col'>
            <p>{cartItem.title}</p>
            <p>{cartItem.brand}</p>
            <p>{cartItem.price}</p>

        </div>
        <div className='flex flex-col gap-2'>
            <p className='flex flex-row justify-normal items-center'>
                <span className='px-2  py-1 border border-gray-300' onClick={()=>updateCart(cartItem,false)}>-</span>
                <span className='px-2  py-1 border border-gray-300'>{cartItem.quantity}</span>
                <span className='px-2  py-1 border border-gray-300' onClick={()=>updateCart(cartItem,true)}>+</span>
            </p>
            <button className='bg-red-300 text-red-800 p-1' onClick={()=>deleteProduct(cartItem.id)}>Delete</button>
        </div>
    </div>
  )
}
