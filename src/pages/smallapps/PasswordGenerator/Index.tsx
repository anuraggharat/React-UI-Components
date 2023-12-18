import React, { ChangeEvent, useState } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'
import usePassword from './hooks/usePasswordHook'

export default function Index() {

    const [length,setLength] = useState(0)
    const [passwordContains,setPasswordContains] = useState({
        uppercase:false,
        lowercase:false,
        numbers:false,
        symbols:false
    })
    const {password,strength,error,generatePassword} = usePassword()

    const onCheckboxChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPasswordContains((oldPasswordContains)=>(
        {
            ...oldPasswordContains,
            [e.target.name]:e.target.checked
        }
        ))
    }

  return (
    <CenteredLayout>
        <div className='w-1/2 bg-white border-gray-200 border p-10 rounded flex flex-col gap-6 font-poppins'>
            <div className='w-full flex flex-row  justify-between items-center'>
                <p>{password}</p>
                <button className='bg-blue-200 text-blue-600 py-4 px-6 rounded-md font-bold'>Copy</button>
            </div>
            <div>
                {error && <p>{error}</p>}
            </div>
            <div className='w-full'>
                <input type="range" name='length' className='w-full' min={0} max={16} value={length} onChange={(e)=>setLength(Number(e.target.value))} />
                <div className='w-full flex flex-row justify-between mt-5'>
                <label htmlFor="length">Character Length</label>
                <p>{length}</p>
                </div>
            </div>
            <div className='w-full flex flex-row justify-between flex-wrap gap-y-4'>
                <div className='w-1/2 flex flex-row gap-2 items-center'>
                    <input type="checkbox" name="uppercase" id="uppercase" 
                    onChange={onCheckboxChange} checked={passwordContains['uppercase']} />
                    <label htmlFor="uppercase">Include Uppercase</label>
                </div>
                <div className='w-1/2 flex flex-row gap-2 items-center'>
                    <input type="checkbox" name="lowercase" id="lowercase"  
                    onChange={onCheckboxChange} checked={passwordContains['lowercase']} />
                    <label htmlFor="lowercase">Include Lowercase</label>
                </div>
                <div className='w-1/2 flex flex-row gap-2 items-center'>
                    <input type="checkbox" name="numbers" id="numbers"  
                    onChange={onCheckboxChange} checked={passwordContains['numbers']} />
                    <label htmlFor="numbers">Include numbers</label>
                </div>
                <div className='w-1/2 flex flex-row gap-2 items-center'>
                    <input type="checkbox" name="symbols" id="symbols"   
                    onChange={onCheckboxChange} checked={passwordContains['symbols']} />
                    <label htmlFor="symbols">Include symbols</label>
                </div>
            </div>
            <div>
                <p>Strength : {strength}</p>
                {JSON.stringify(passwordContains)}
            </div>
            <div>
                <button onClick={()=>generatePassword(length,passwordContains)} className='w-full p-4 bg-blue-200 font-bold rounded-md text-blue-800'>Generate</button>
            </div>
        </div>
    </CenteredLayout>
  )
}
