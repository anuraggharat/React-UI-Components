import { ChangeEvent, useState } from 'react'
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
    const [copied,setCopied] = useState(false)

    const onCheckboxChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPasswordContains((oldPasswordContains)=>(
        {
            ...oldPasswordContains,
            [e.target.name]:e.target.checked
        }
        ))
    }

    const copyPassword = () =>{
        setCopied(true)
        navigator.clipboard.writeText(password)
    }

  return (
    <CenteredLayout>
        <div className='w-1/2 bg-white border-gray-300 border p-10 rounded flex flex-col gap-6 text-xl'>
            <div className='w-full flex flex-row  justify-between items-center'>
                <p className='text-3xl font-semibold'>{password}</p>
                <button
                    disabled={password === '' || error !==''}
                    onClick={copyPassword} 
                    className='bg-blue-100 text-blue-600 py-4 px-8 rounded-md font-semibold'>
                        {copied ? 'Copied' : 'Copy Password'}
                    </button>
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
                <p>Strength : <span  className='font-bold'>{strength}</span></p>
            </div>
            <div>
                {error && <p className='text-red-600'>{error}</p>}
            </div>
            <div>
                <button onClick={()=>generatePassword(length,passwordContains)} className='w-full p-4 bg-blue-200 font-semibold rounded-md text-blue-800'>Generate</button>
            </div>
        </div>
    </CenteredLayout>
  )
}
