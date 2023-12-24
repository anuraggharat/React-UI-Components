import React, { useState,ChangeEvent } from 'react'
import CenteredLayout from '../../../components/CenteredLayout'
import Checkbox from './components/Checkbox'

const data:Node[] = [
    {
        id:1,
        make:'BMW',
        bucket:[
            {
                id:12,
                make:'BMW X5',
            },
            {
                id:13,
                make:'BMW X1',
            },
            {
                id:14,
                make:'5 series',
            },
            {
                id:15,
                make:'3 Series',
            }
        ]
    },
    {
        id:2,
        make:'Jeep',
        bucket:[
            {
                id:21,
                make:'Compass',
            },
            {
                id:23,
                make:'Meredian',
            },
            {
                id:24,
                make:'Wrangler',
            }
        ]
    },
    {
        id:3,
        make:'Skoda',
        bucket:[
            {
                id:31,
                make:'Kushaq',
            },
            {
                id:32,
                make:'Octavia',
            },
            {
                id:33,
                make:'Slavia',
            }
        ]
    },
    {
        id:4,
        make:'Tata',
        bucket:[
            {
                id:41,
                make:'Safari',
            },
            {
                id:42,
                make:'Harrier',
            },
            {
                id:43,
                make:'Nexon',
            },
            {
                id:44,
                make:'Hexa',
            }
        ]
    }
]

interface Node{
    id:number,
    make:string,
    bucket?:Node[]
}

export default function index() {

    const [values,setValues] = useState({

    })

    const handleCheck = (item:any,parent:any) =>{
        const temp:any = {...values}

        //if we are unchecking
        if (temp[item.make] === true) {
            //uncheck the item
            delete temp[item.make]
            //check if it has child
            if (item?.bucket) {
                for(let i in item.bucket){
                    delete temp[item.bucket[i].make]
                }
            }
            if (parent) {
                if(!parent.bucket.every((i:Node)=> temp[i.make]===true)){
                    temp[parent.make] = false
                }
            }
        }
        //if we are checking
        else{
            temp[item.make] = true
            if (item?.bucket) {
                for (let index = 0; index < item.bucket.length; index++) {
                    temp[item.bucket[index].make] = true
                }
            }
            if (parent) {
                if(parent.bucket.every((i:Node)=> temp[i.make]===true)){
                    temp[parent.make] = true
                }
            }
        }
        setValues(temp)

    }

  return (
        <CenteredLayout>
            <div className=''>
            {data.map((item)=>(
                <Checkbox item={item} key={item.id} values={values} handleCheck={handleCheck} parent={undefined}/>
            ))}
        </div>
        </CenteredLayout>
  )
}
