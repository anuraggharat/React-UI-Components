import { useRef } from "react"


function useCustomEffect(fn:()=>{},deps?:any[]){

    let isFirstRender = useRef(true)
    let prevDeps = useRef<any[]>([])

    if (isFirstRender.current) {
        isFirstRender.current = false
        const cleanup = fn()
        return ()=>{
            if(cleanup && typeof cleanup === 'function'){
                cleanup()
            }
        }
    }

    //check if render is required
    const renderReq = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true

    if (renderReq) {
        const cleanup = fn()
        if(cleanup && typeof cleanup === 'function'){
            cleanup()
        }
    }

    prevDeps.current = deps || []
}

export default useCustomEffect