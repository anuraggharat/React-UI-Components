
interface CellTypes{
    idx:number,
    value:string|null,
    handleClick:(idx:number)=>void,
    winner:string|null,
    wonBoxes:number[]
}

export default function Cell({idx,value,handleClick,winner,wonBoxes}:CellTypes) {
  return (
    <button 
        className={`w-[10rem] h-[10rem] m-0 text-white text-4xl font-bold rounded-md ${wonBoxes.includes(idx) ? 'bg-green-500' : 'bg-[#222]'}`}
        onClick={()=>handleClick(idx)}
        disabled={value !== null || winner !== null}
    >
        {value}
    </button>

  )
}
