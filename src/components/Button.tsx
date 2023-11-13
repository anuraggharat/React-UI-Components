
interface ButtonProps{
    text:string
    handler:()=>void
}

export default function Button({text,handler}:ButtonProps) {
  return (
    <button className='bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-xl w-auto inline-flex text-white' onClick={handler}>
    {text}
  </button>
  )
}
