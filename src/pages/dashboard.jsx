import { useAuth } from "../context/AuthContext"
import Btn from "../components/btn"
export default function DashBoard(){
      const {logout}=useAuth()
    return(
        <>
        <h1>hello gys</h1>
        <Btn onClick={logout}>logout</Btn>
        </>

    )}
