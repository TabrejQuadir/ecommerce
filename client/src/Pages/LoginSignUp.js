import React, { useState } from 'react';
import './Css/LoginSignUp.css';

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/api/auth/signin', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json().then((data) => responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signUp = async () => {
    console.log("Sign Up Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/api/auth/signup', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json().then((data) => responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className='loginSignup'>
      <div className='login-signupContainer'>
        <h1>{state}</h1>
        <div className='login-signupFields'>
          {state === "Sign Up" &&
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type='text'
              placeholder='Your Name'
            />}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type='email'
            placeholder='Enter Your Email'
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type='password'
            placeholder='Password'
          />
        </div>
        <button onClick={() => { state === "Login" ? login() : signUp(); }}>Continue</button>
        {state === "Sign Up" ?
          <p className='login-SignupLogin'>Already Have an Account? <span onClick={() => { setState("Login"); }}>Login Here</span></p> :
          <p className='login-SignupLogin'>Create an Account? <span onClick={() => { setState("Sign Up"); }}>Click Here</span></p>
        }

        <div className='login-SignupAgree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;