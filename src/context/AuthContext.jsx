import { createContext,useContext,useState,useEffect } from "react";
import useLocalStorage from "../hooks/localStorageHook";



const AuthContext=createContext(null)

export default function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated]=useState(null)
    const {getLocal,setLocal,removeLocal}=useLocalStorage()
    useEffect(()=>{
        const savedAuth = getLocal("auth")
        console.log("useeffect")
        if (savedAuth === "true"){setIsAuthenticated(true)}
    },[])

    const login=()=>{
        setIsAuthenticated(true)
        setLocal("auth","true")
    }

    const logout=()=>{
        setIsAuthenticated(false)
        removeLocal("auth")
    }
    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
        {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}