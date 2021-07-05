import { useEffect } from "react"

export const useDebounceEffect = (effect, dependencies, delay) =>{
    useEffect(()=>{
        const handler = setTimeout(()=>effect(),delay);
        return () => clearTimeout(handler);
    }
        ,[...dependencies || [] , delay])
}