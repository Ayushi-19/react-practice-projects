import { createContext, useState } from "react";

const Authentication = createContext({
    auth : false,
    login: ()=>{},
    logout: ()=>{}
})

export default Authentication;

export const Auth = (props) =>{
    const [auth, setAuth] = useState(false);
    const loginHandler = () =>{
        setAuth(true)
    }

    const logoutHandler = () => {
        setAuth(false)
    }


    const initialValue = {
        auth: auth,
        login: loginHandler,
        logout: logoutHandler
    }
return (
    <Authentication.Provider value={initialValue}>
        {props.children}
    </Authentication.Provider>
)};