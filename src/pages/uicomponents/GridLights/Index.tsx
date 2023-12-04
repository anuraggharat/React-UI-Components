import { useState } from 'react';
import Button from './components/Button';

const config = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

export default function Index() {

  const length = config.flat().filter((i)=>i===1).length
  console.log(length);
  
  const [visited,setVisited] = useState<number[]>([])
  const [isDeactivating,setisDeactivating] = useState<boolean>(false)
  
  const startDeactivating=()=>{
    setisDeactivating(true)
    const id = setInterval(() => {
      setVisited((prevVisited) => {
        const temp = [...prevVisited];
        temp.pop();
        if (temp.length === 0) {
          clearInterval(id);
          setisDeactivating(false);
        }
        return temp;
      });
    }, 400);
    
  }

  const handleClick = (i:number) => {
    const temp = [...visited]
    
    if (temp.includes(i)) {
      return
    }else{
      temp.push(i)
      setVisited(temp)
    }
    if(temp.length === length){
      startDeactivating()
    }
  }





  return (
    <div className='bg-white min-h-screen w-full flex-col flex justify-center items-center'>
      <div className='w-1/2'>
        <div className='grid grid-cols-4 gap-4'>
          {config.flat().map((item, rowIndex) =>
          item ? (<Button active={visited.includes(rowIndex)} handleClick={handleClick} rowIndex={rowIndex} isDeactivating={isDeactivating}  />) : <div className='bg-white h-44 w-full'></div>)}
        </div>
      </div>
    </div>
  );
}
