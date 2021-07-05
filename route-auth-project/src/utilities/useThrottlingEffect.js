import { useEffect } from "react";

export const useThrottlingEffect = (effect, dependencies, delay) =>{
    
    useEffect(()=>{
        let flag = true;
        let handler;
        if(flag){
            effect();
            flag = false;
            handler = setTimeout(()=>{
                flag=true;
                console.log("inside_settimeout")
            },delay);
        }
        return () => clearTimeout(handler);
    }
        ,[...dependencies || [] , delay])
}