import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div className='relative min-h-screen w-full'>
        <Outlet />
        <Link className='rounded-lg fixed top-5 left-5 p-2 bg-slate-200 border border-slate-400' to={'/'}>Go Back</Link>
    </div>
  )
}
