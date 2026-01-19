import { useState } from "react"
import { useId } from "react"
import Btn from "../components/btn"
import InputFeild from "../components/input"
export default function Signin(){
    const email=useId()
    const password=useId()
    const [emailval,setEmail]=useState("")
    const [passwordval,setPasswordval]=useState("")
    const isDisabled= !emailval || !passwordval;
return(
    <article className="signin-page">
        <div className="heading"><h1>Sign in</h1></div>
        <form  className="signin-form">
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
            
            <Btn type="submit" disabled={isDisabled}>Sign-in</Btn>
            </div>
            </div>
        </form>
    </article>
    
)
}