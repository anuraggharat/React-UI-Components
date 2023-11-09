import React from 'react'

interface LayoutProps{
    children : React.ReactNode
}

export default function Layout({children}:LayoutProps) {
  return (
    <div className='min-h-screen w-full bg-slate-50'>
        {children}
    </div>
  )
}
