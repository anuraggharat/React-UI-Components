import React, { useState } from 'react'
import DataItem from './components/DataItem'

const entries = [
    {
        name:"node_modules",
        children:[
            {
                name:"react",
            },
            {
                name:"react-dom",
            },
            {
                name:'react-router-dom'
            }
        ]
    },
    {
        name:"src",
        children:[
            {
                name:"pages",
                children:[
                    {
                        name:"Page1.tsx"
                    },
                    {
                        name:"Page2.tsx"
                    }
                ]
            },
            {
                name:"App.tsx",
            },
            {
                name:'app.css'
            }
        ]
    },
    {
        name:"tsconfig.json"
    },
    {
        name:"package.json"
    }
]

export default function Index() {
  return (
    <div className='min-h-screen transition-all duration-500 ease-out'>
        <div className='w-1/4 min-h-screen bg-gray-100'>
            {entries.map((entry)=>(<DataItem entry={entry} depth={1}/>))}
        </div>
    </div>
  )
}
