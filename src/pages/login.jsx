import { useState } from "react"
import { useId } from "react"
import Btn from "../components/btn"
import InputFeild from "../components/input"
export default function Signin(){
    const signinemail=useId()
    const signinpassword=useId()
    const [email,setEmail]=useState("")
return(
    <article className="signin-page">
        <div className="heading"><h1>Sign in</h1></div>
        <form  className="signin-form">
            <div className="form-fileds-master-container">
            <div className="email-form-feild">
            <label htmlFor={signinemail} className="signin-email">Email</label>
            
            <InputFeild  name="signin-email" id={signinemail} value={email} type="email" placeholder="Example@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
            
            </div>
            <div className="password-form-field">
            <label htmlFor={signinpassword} className="signin-password">password</label>
            <InputFeild type="password" name="signin-password" id={signinpassword} />
            </div>
            <div className="buttons-field">
            <Btn onClick={()=>alert("hello")}>Sign-in</Btn>
            </div>
            </div>
        </form>
    </article>
    
)
}