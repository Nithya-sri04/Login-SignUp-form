import React,{useState} from 'react'
import './LoginSignUp.css';
import usericon from '../assets/person.png';
import password_icon from '../assets/password.png';
import email_icon from '../assets/email.png';


const LoginSignUp = () => {
    const [action,setAction] = useState("Login");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className = 'underline'></div>
        </div>
        <div className = "inputs">
        {action === "Login" ? <div></div> :             <div className = "input">
                <img src = {usericon} alt = ""/>
                <input type = "text" placeholder='Name'/>
            </div>}

            <div className = "input">
                <img src = {email_icon} alt = ""/>
                <input type = "email" placeholder='Email'/>
            </div>
            <div className = "input">
                <img src = {password_icon} alt = ""/>
                <input type = "password" placeholder='Password'/>
            </div>
        </div>
        {action === "Sign Up" ? <div></div> :  <div className='forgotPassword'>Forgot Password? <span> Click here</span></div>}

       


        <div className="submitContainer">
            <div className= {action === "Login"? "submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign up</div>
            <div className= {action=== "Sign Up" ? "submit gray" : "submit"} onClick={()=>setAction("Login")} >Login</div>
        </div>
      
    </div>
  )
}

export default LoginSignUp
