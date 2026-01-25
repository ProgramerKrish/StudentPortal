import { Route,Routes } from "react-router-dom"
import Register from "./pages/register.jsx"
import Signin from "./pages/login.jsx"
import DashBoard from "./pages/dashboard.jsx"
import ProtectedRoute from "./components/protectedRoute.jsx"
import Loader from "./components/loader.jsx"
import "./Authstyle.css"
import "../src/styles/global.css"
import { useAuth } from "./context/AuthContext.jsx"

export default function App(){

  const {isAuthenticated}=useAuth()


  if(isAuthenticated===null){
    return <Loader/>
  }
  return(
    <Routes>
      <Route path="/" element={<Register/>}></Route> 
      <Route path="/signin" element={<Signin />} ></Route> 
      <Route path="/dashboard" element={
        <ProtectedRoute ><DashBoard  /> </ProtectedRoute>}></Route>
    </Routes>
  )
}