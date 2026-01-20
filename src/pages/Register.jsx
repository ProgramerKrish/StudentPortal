import Btn from "../components/btn"
import InputFeild from "../components/input"
import { useState } from "react"
import { useId } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Register(){
    const navigate=useNavigate();
    const email=useId()
    const password=useId()
    const [emailval,setEmailVal]=useState("")
    const [paswwordval,setPasswordval]=useState("")
    const [confirmPasswordVal,setConfirmPasswordVal]=useState("")
    function isDisable(emailval,paswwordval){
        return !(emailval!="" && paswwordval!="");
    }

    function handelSubmit(e){
        e.preventDefault();
        navigate("/signin");
    }
return(
    <article className="register-page">
        <div className="heading"><h1>Sign up</h1></div>
        <form  className="register-form" onSubmit={handelSubmit}>
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
            <InputFeild type="password" value={confirmPasswordVal} name="register-confirm-password" id="register-confirm-password" onChange={(e)=>setConfirmPasswordVal(e.target.value)} />
            </div>
            <div className="buttons-field">
            <Btn type="submit" disabled={isDisable(emailval,paswwordval)}  >Register</Btn>
            <Link to="/signin"> Sign in</Link>
            </div>
            </div>
        </form>
        
    </article>
)
}