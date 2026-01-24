import { createContext,useContext,useState,useEffect } from "react";

const AuthContext=createContext(null)

export default function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated]=useState(null)

    useEffect(()=>{
        const savedAuth = localStorage.getItem("auth")
        if (savedAuth === "true"){setIsAuthenticated(true)}
    },[])

    const login=()=>{
        setIsAuthenticated(true)
        localStorage.setItem("auth","true")
    }

    const logout=()=>{
        setIsAuthenticated(false)
        localStorage.removeItem("auth")
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