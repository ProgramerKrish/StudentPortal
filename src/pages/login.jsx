import { useState } from "react"
import { useId } from "react"
import { useNavigate } from "react-router-dom"
import Btn from "../components/btn"
import InputFeild from "../components/input"
import { useAuth } from "../context/AuthContext"

export default function Signin(){
    
    const {login }= useAuth()
    const navigate=useNavigate()
    const email=useId()
    const password=useId()
    const [emailval,setEmail]=useState("")
    const [passwordval,setPasswordval]=useState("")
    const isDisabled= !emailval || !passwordval;



   

    async function handelLogin(e){
        e.preventDefault()

        try{
            const res = await fetch ("https://jsonplaceholder.typicode.com/posts",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    email:emailval,
                    password:passwordval,
                    userId:1
                })
            })
            if(!res.ok){
                throw new Error("Login-failed")
            }
            const data = await res.json()
            console.log(data)
            login()
            navigate("/dashboard")
        }
        catch(err){
            console.log(err)
            alert("login failed")

        }
    }

return(
    <article className="signin-page">
        <div className="heading"><h1>Sign in</h1></div>
        <form  className="signin-form" onSubmit={handelLogin}>
            <div className="form-fileds-master-container">
            <div className="email-form-feild">
            <label htmlFor={email} className="signin-email">Email</label>
            
            <InputFeild  name="signin-email" id={email} value={emailval} type="email" placeholder="Example@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
            
            </div>
            <div className="password-form-field">
            <label htmlFor={password} className="signin-password">password</label>
            <InputFeild type="password" value={passwordval} name="signin-password" id={password} onChange={(e)=>setPasswordval(e.target.value)} />
            </div>
            <div className="buttons-field">
            
            <Btn type="submit" disabled={isDisabled} >Sign-in</Btn>
            </div>
            </div>
        </form>
    </article>
    
)
}