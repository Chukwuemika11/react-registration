import React, { useState } from 'react'
import "./LoginSignUp.css"

import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"

const LoginSignUp = () => {
    const [action , setAction] = useState("Login")

    function handleSignClick(){
        setAction("Sign Up")
    }

    function handleLoginClick(){
      setAction("Login")
    }

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className='inputs'>
        {action === "Login" ? <div></div>:
          <div className="input">
          <img src={user_icon} alt="" />
          <input placeholder='name' type="text" />
      </div> 
        }
        <div className="input">
            <img src={email_icon} alt="" />
            <input placeholder='email id' type="email" />
        </div>

        <div className="input">
            <img src={password_icon} alt="" />
            <input placeholder='password' type="password" />
        </div>
      </div>
      {action === "Sign Up" ? <div></div>:
       <div className="forgot-password">
        Lost password? <span>Click Here!</span> 
      </div>
      }
     
      <div className='submit-container'>
        <div onClick={handleSignClick} className={action === "Login" ? "submit gray" : "submit"}>Sign Up</div>
        <div  onClick={handleLoginClick} className={action === "Sign Up" ? "submit gray" : "submit"}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignUp
