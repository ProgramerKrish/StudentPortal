import Btn from "../components/btn"
import InputFeild from "../components/input"
export default function Register(){
return(
    <article className="register-page">
        <div className="heading"><h1>Sign up</h1></div>
        <form  className="register-form">
            <div className="form-fileds-master-container">
            <div className="email-form-feild">
            <label htmlFor="register-email" className="register-email">Email</label>
            <InputFeild type="email" name="register-email" id="register-email" placeholder="Example@gmail.com" />
            </div>
            <div className="password-form-field">
            <label htmlFor="register-password" className="register-password">password</label>
            <InputFeild type="password" name="register-password" id="register-password" />
            </div>
            <div className="confirm-password-field">
            <label htmlFor="register-confirm-password" className="register-confirm-password">confirm password</label>
            <InputFeild type="password" name="register-confirm-password" id="register-confirm-password" />
            </div>
            <div className="buttons-field">
            <Btn type="submit">Register</Btn>
            <a href="login.jsx">Sign in</a>
            </div>
            </div>
        </form>
    </article>
)
}