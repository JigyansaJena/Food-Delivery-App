import React, { useState } from 'react';
import "./LoginSignUp.css";
import { assets } from '../../assets/frontend_assets/assets';

const LoginSignUp = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Login")

  return (
    <div className='loginsignup'>
      <form className='loginSignUp-container'>
        <div className='login-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className='loginInput'>
          {currState === "Login" ? <></> : <input type='text' placeholder='Your Name' required />}
          <input type='email' placeholder='Your Email' required />
          <input type='password' placeholder='password' required />
        </div>
        <button>{currState === "signUp" ? "create account" : "Login"}</button>
        <div className='login-condition'>
          <input type='checkbox' required />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div> 
        {currState === "Login" ? <p>Create a new account ? <span onClick={() => setCurrState("signUp")}>Click Here</span></p> : <p>Already have an account <span onClick={() => setCurrState("Login")}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginSignUp;