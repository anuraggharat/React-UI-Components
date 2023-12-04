import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen w-full bg-slate-50 p-32'>
      <div>
        <h1 className='text-xl'>React Components</h1>
        <ul className='mt-10 list-disc pl-4'>
          <li className='text-blue-700 hover:text-blue-800 hover:underline transition-all duration-500'>
          <Link to={'/components/modal'}>Modal</Link>
          </li>
          <li className='text-blue-700 hover:text-blue-800 hover:underline transition-all duration-500'>
          <Link to={'/components/slidemodal'}>Slide Modal</Link>
          </li>
          <li className='text-blue-700 hover:text-blue-800 hover:underline transition-all duration-500'>
          <Link to={'/components/collapseFolders'}>Collapsing Folders</Link>
          </li>
          <li className='text-blue-700 hover:text-blue-800 hover:underline transition-all duration-500'>
          <Link to={'/components/pagination'}>Pagination</Link>
          </li>
          <li className='text-blue-700 hover:text-blue-800 hover:underline transition-all duration-500'>
          <Link to={'/components/stopwatch'}>Stop Watch</Link>
          </li>
          <li className='text-blue-700 hover:text-blue-800 hover:underline transition-all duration-500'>
          <Link to={'/components/customerqueue'}>Customer Queue</Link>
          </li>
          <li className='text-blue-700 hover:text-blue-800 hover:underline transition-all duration-500'>
          <Link to={'/components/progressbar'}>Progress Bar</Link>
          </li>
          <li className='text-blue-700 hover:text-blue-800 hover:underline transition-all duration-500'>
          <Link to={'/components/gridlights'}>Grid Lights</Link>
          </li>
          
        </ul>
      </div>

    </div>
  )
}
