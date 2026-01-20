import { Route,Routes } from "react-router-dom"
import Register from "./pages/register.jsx"
import Signin from "./pages/login.jsx"
import "./Authstyle.css"
import "../src/styles/global.css"

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Register/>}></Route> 
      <Route path="/signin" element={<Signin/>}></Route> 
    </Routes>
  )
}