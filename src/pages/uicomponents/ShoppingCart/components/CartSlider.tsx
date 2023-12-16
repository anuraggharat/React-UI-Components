import React from 'react'
import CartItem from './CartItem'
import { Product } from '../Index'

export default function CartSlider({
    cartItems,deleteProduct,updateCart}:{cartItems:any[],
    deleteProduct:(id:string)=>void,
    updateCart:(product:Product,increment:boolean)=>void
    }){
  return (
    <div className='min-h-screen w-1/4 bg-slate-50 fixed top-0 right-0 shadow-lg p-4 py-10 gap-4 flex flex-col'>
        {cartItems.map(cartItem=>(<CartItem cartItem={cartItem} deleteProduct={deleteProduct} updateCart={updateCart}/>))}
        <div className='w-full mt-auto flex justify-between p-3 text-2xl border-t-2'>
            <p>
                Total
            </p>
            <p>
                $100
            </p>
        </div>
    </div>
  )
}
