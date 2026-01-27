import { createContext,useContext,useReducer,useEffect } from "react";
import useLocalStorage from "../hooks/localStorageHook";
import AuthReducer from "../AuthReducer/authReducer";


const AuthContext=createContext(null)

export default function AuthProvider({children}){
    /* const [isAuthenticated,setIsAuthenticated]=useState(null) */
    const [state,dispatch]=useReducer(AuthReducer,{isAuthenticated:null,})
    const {getLocal,setLocal,removeLocal}=useLocalStorage()
    useEffect(()=>{
        const savedAuth = getLocal("auth")
        console.log("useeffect")
        if (savedAuth === "true"){dispatch({type:"LOGIN"})}
    },[])

    const login=()=>{
        /* setIsAuthenticated(true) */
        dispatch({type:"LOGIN"})
        setLocal("auth","true")
    }

    const logout=()=>{
        dispatch({type:"LOGOUT"})
        removeLocal("auth")
    }
    return(
        <AuthContext.Provider value={{isAuthenticated:state.isAuthenticated,dispatch,login,logout}}>
        {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}