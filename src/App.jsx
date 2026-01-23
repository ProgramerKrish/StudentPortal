import { Route,Routes } from "react-router-dom"
import { useState,useEffect } from "react"
import Register from "./pages/register.jsx"
import Signin from "./pages/login.jsx"
import DashBoard from "./pages/dashboard.jsx"
import ProtectedRoute from "./components/protectedRoute.jsx"
import Loader from "./components/loader.jsx"
import "./Authstyle.css"
import "../src/styles/global.css"

export default function App(){

  const [isAuthenticated,setIsAuthenticated]=useState(null)
  useEffect(()=>{
    const savedAuth=localStorage.getItem("auth")
    setIsAuthenticated(savedAuth==="true")
  },[]);

  if(isAuthenticated===null){
    return <Loader/>
  }
  return(
    <Routes>
      <Route path="/" element={<Register/>}></Route> 
      <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated}/>} ></Route> 
      <Route path="/dashboard" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}><DashBoard  /> </ProtectedRoute>}></Route>
    </Routes>
  )
}