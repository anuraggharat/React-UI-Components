import React from "react"

interface CenteredLayout {
    children: React.ReactNode
}


export default function CenteredLayout({children}:CenteredLayout) {
  return (
    <div className='min-h-vh bg-white flex flex-col justify-center items-center py-20 font-poppins'>
        {children}
    </div>
  )
}
