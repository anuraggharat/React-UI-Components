import React, { useEffect, useState } from 'react';

export default function StopWatch() {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setRunning] = useState<boolean>(false);

  let id:number;

  useEffect(() => {
    if (isRunning) {
      id = setInterval(() => {
        setCount((prevCount) => prevCount + 0.1);
      }, 100);
    }

    return () => {
      clearInterval(id);
    };
  }, [isRunning]);


  const handleTimer = () => {
    setRunning(isRunning=>!isRunning);
  };

  const resetTimer = () => {
    setCount(0);
  };

  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
      <div className='border border-gray-300 w-72'>
        <div className='bg-gray-200 px-12 py-10 text-center'>
          <p className='text-4xl font-mono leading-none'>{count.toFixed(1)}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <button className='w-1/2 p-4 border-r border-gray-300' onClick={handleTimer}>
            {isRunning ? 'Stop': 'Start'}
          </button>
          <button className='w-1/2 p-4' onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
