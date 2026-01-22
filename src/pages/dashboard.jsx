import { Navigate } from "react-router-dom"

export default function DashBoard({isAuthenticated}){
    
    if(!isAuthenticated){ return <Navigate to="/signin" /> }
    return(
        
        <h1>hello gys</h1>
    )}
