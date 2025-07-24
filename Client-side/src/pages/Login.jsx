import React, { useState } from 'react'
import gameimg from '../assets/game.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import './Login.css'
import { handleerror, handlesuccess } from '../util'
const Login = () => {
    const navigate = useNavigate()
    const [logininfo, setLogininfo] = useState({
        email: '',
        password: '',
    })

const handleSubmit = async (e) => {
  e.preventDefault();
  const { email, password } = logininfo;

  if (!email || !password) {
    return handleerror("All fields are required");
  }

  if (password.length < 4) {
    return handleerror("Password must be at least 4 characters");
  }


  console.log("Sending login info:", logininfo);

  try {
    const url = 'http://localhost:3001/login';
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logininfo),
    });
    const result = await res.json();
    console.log("Server response:", result);


    const { success, message,jwttoken,username,email } = result;
    if (success) {
      handlesuccess(message);
      localStorage.setItem('token',jwttoken)
      localStorage.setItem('loggedInuser',username)
      localStorage.setItem('email',email)
      setTimeout(() => navigate('/'), 1000);
    } else {
      handleerror(message || "Login failed");
    }
  } catch (err) {
    console.error("Network or server error:", err);
    handleerror("Something went wrong");
  }
};

    return (
        <>
            <div className="background">
                <div className="form-container">
                    <div className="image">
                        <img src={gameimg} alt="" />
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className="form">
                            <h1>GameZone</h1>
                            <h2>Login</h2>
                            <div className="inputs">
                                <input type="email" placeholder='email' value={logininfo.email} onChange={(e) => setLogininfo({ ...logininfo, email: e.target.value })} />
                                <input type="password" placeholder='password' value={logininfo.password} onChange={(e) => setLogininfo({ ...logininfo, password: e.target.value })} />
                            </div>
                            <button>Log in</button>
                            <div className="forgot">
                                <div className="check">
                                    <input type="checkbox" /> <p>Remember me</p>
                                </div>
                                `<p className='for-pass'>Forgot password?</p>
                            </div>
                            <div className="sign"><p>New to here? <Link to="/signup">Sign up</Link></p></div>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>

        </>
    )
}

export default Login
