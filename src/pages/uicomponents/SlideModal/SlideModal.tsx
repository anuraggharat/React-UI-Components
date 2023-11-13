import { useState } from 'react'
import Button from '../../../components/Button'
import SlideModalComponent from './components/SlideModalComponent'

export default function SlideModal() {
const [modal, setModal] = useState(false)

  return (
    <div className='min-h-screen relative w-full bg-slate-50 flex justify-center items-center'>
      <SlideModalComponent modal={modal} setModal={setModal} />
      <div className='w-1/2 h-1/2 flex flex-col justify-center items-center'>
        <Button text='Open modal' handler={()=>setModal(true)} />
      </div>
    </div>
  )
}
