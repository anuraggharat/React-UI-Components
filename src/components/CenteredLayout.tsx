import React from "react"

interface CenteredLayout {
    children: React.ReactNode
}


export default function CenteredLayout({children}:CenteredLayout) {
  return (
    <div className='p-10 min-h-vh bg-white flex flex-col justify-center items-center font-poppins'>
        {children}
    </div>
  )
}
