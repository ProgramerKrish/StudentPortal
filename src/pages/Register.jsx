import Btn from "../components/btn"
import InputFeild from "../components/input"
import { useState } from "react"
import { useId } from "react"
export default function Register(){
    const email=useId()
    const password=useId()
    const [emailval,setEmailVal]=useState("")
    const [paswwordval,setPasswordval]=useState("")
    function isEnable(emailval,paswwordval){
        return !(emailval!="" && paswwordval!="");
    }
return(
    <article className="register-page">
        <div className="heading"><h1>Sign up</h1></div>
        <form  className="register-form">
            <div className="form-fileds-master-container">
            <div className="email-form-feild">
            <label htmlFor={email} className="register-email">Email</label>
            <InputFeild type="email" name="register-email" value={emailval} id={email} placeholder="Example@gmail.com" onChange={(e)=>setEmailVal(e.target.value)} />
            </div>
            <div className="password-form-field">
            <label htmlFor={password} className="register-password">password</label>
            <InputFeild type="password" value={paswwordval} name="register-password" id={password} onChange={(e)=>setPasswordval(e.target.value)} />
            </div>
            <div className="confirm-password-field">
            <label htmlFor="register-confirm-password" className="register-confirm-password">confirm password</label>
            <InputFeild type="password" name="register-confirm-password" id="register-confirm-password" />
            </div>
            <div className="buttons-field">
            <Btn type="submit" disabled={isEnable(emailval,paswwordval)} >Register</Btn>
            <a href="login.jsx">Sign in</a>
            </div>
            </div>
        </form>
    </article>
)
}