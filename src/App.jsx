import { Route,Routes } from "react-router-dom"
import { useState } from "react"
import Register from "./pages/register.jsx"
import Signin from "./pages/login.jsx"
import DashBoard from "./pages/dashboard.jsx"
import ProtectedRoute from "./components/protectedRoute.jsx"
import "./Authstyle.css"
import "../src/styles/global.css"

export default function App(){

  const [isAuthenticated,setIsAuthenticated]=useState(false)

  return(
    <Routes>
      <Route path="/" element={<Register/>}></Route> 
      <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated}/>} ></Route> 
      <Route path="/dashboard" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}><DashBoard isAuthenticated={isAuthenticated}/> </ProtectedRoute>
      }></Route>
    </Routes>
  )
}