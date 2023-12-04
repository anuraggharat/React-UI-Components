
interface ButtonProps{
    handleClick:(rowIndex:number)=>void
    active:boolean
    rowIndex:number
    isDeactivating:boolean
}

export default function Button({handleClick,active,rowIndex,isDeactivating}:ButtonProps) {
  return (
    <button onClick={()=>handleClick(rowIndex)} 
    className={` rounded-xl h-44 w-full gap-4 ${active ? 'bg-green-500' : 'bg-slate-200'}`} 
    key={`${rowIndex}}`}
    disabled={isDeactivating || active}
    >
  </button>
  )
}
