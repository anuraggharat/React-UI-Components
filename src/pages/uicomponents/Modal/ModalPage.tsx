import { useState } from 'react'
import ModalComponent from './Components/ModalComponent'
import Button from '../../../components/Button'

export default function ModalPage() {

  const [modal, setModal] = useState(false)

  return (
    <div className='min-h-screen relative w-full bg-slate-50 flex justify-center items-center'>
      {modal && <ModalComponent setModal={setModal} />}
      <div className='w-1/2 h-1/2 flex flex-col justify-center items-center'>
        <Button text='Open modal' handler={()=>setModal(true)} />
      </div>
    </div>
  )
}
