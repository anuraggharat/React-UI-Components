import { Product } from '../Index'

interface CardProps{
    item:Product,
    addToCart:(product:Product,increment:boolean) => void
}


export default function Card({item,addToCart}:CardProps) {
  return (
    <div className='lg:w-1/5 md:w-1/3 w-1/2 mx-4 border bg-white border-gray-300 rounded-md overflow-hidden flex flex-col'>
        <img src={item.thumbnail} alt={item.title} className='w-full h-40'/>
        <div className='flex flex-row justify-between p-2'>
        <div>
        <h2 className='text-nase'>{item.title}</h2>
        <p className='text-xs text-gray-500'>{item.brand}</p>
        </div>
        <div>
        </div>
        <h2>${item.price}</h2>
        </div>
        <div className='p-2 text-xs'>
        <p>{item.description}</p>
        </div>
        <div className='p-2 flex flex-row justify-end self-end mt-auto'>
            <button className='bg-blue-300 text-blue-800 px-4 p-2 rounded text-sm' onClick={()=>addToCart(item,true)}>Add to cart</button>
        </div>
    </div>
  )
}
