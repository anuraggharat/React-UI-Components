import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div className='relative min-h-screen w-full'>
        <Outlet />
    </div>
  )
}
