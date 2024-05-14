import React from 'react';
import './Css/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginSignup'>

      <div className='login-signupContainer'>
        <h1>Sign Up</h1>
        <div className='login-signupFields'>
      <input type='text' placeholder='Your Name'/>
      <input type='email' placeholder='Enter Your Email'/>
      <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='login-SignupLogin'>Already Have an Acoount?<span>Login Here</span></p>
        <div className='login-SignupAgree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp;