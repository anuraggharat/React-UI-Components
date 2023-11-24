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
    <div className='flex flex-col justify-center min-w-full items-center min-h-screen'>
        <div>
        {entries.map((entry)=>(<DataItem entry={entry} depth={1}/>))}
        </div>
    </div>
  )
}
