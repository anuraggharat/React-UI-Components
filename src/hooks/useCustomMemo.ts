import { useEffect, useRef } from "react"

const depsEqual = (prevDeps:any[],newDeps:any[]) =>{
    if(prevDeps.length !== newDeps.length) return false
    if (!prevDeps) return false
    
    for (let i = 0; i < prevDeps.length; i++) {
        if (prevDeps[i] !== newDeps[i]) {
            return false
        }
    }
    return true
}


const useCustomMemo = (fn:any,deps:any) =>{

    const memoizedRef = useRef<any>(null)

    //check if dependencies array
    if(!memoizedRef.current || !depsEqual(memoizedRef?.current?.deps,deps)){
        memoizedRef.current = {
            value:fn(),
            deps
        }
    }

    useEffect(()=>{
        return ()=>{
            memoizedRef.current=null
        }
    },[])

    return memoizedRef.current.value;



}

export default useCustomMemo