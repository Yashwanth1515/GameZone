import React, { useState } from 'react'

import gameimg from '../assets/game.jpg'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import { ToastContainer} from 'react-toastify';
import { handleerror, handlesuccess } from '../util'
const Signup = () => {
    const navigate = useNavigate();
    const [signupinfo, setSignupinfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password,confirmPassword } = signupinfo;
        if (!username || !email || !password || !confirmPassword) {
            return handleerror("All fields are required")
        }
        else if(password.length<4){
            return handleerror("Password must contain atleast 4 characters")
        }
        else if(password != confirmPassword){
            return handleerror("Passwords Do Not Matching")
        }
        try {
            const url = 'http://localhost:3001/Signup';
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupinfo)
            });
            const result = await res.json();
            const {success,message,error} = result;
            if(success){
                handlesuccess(message)
                setTimeout(() => {
                    navigate('/login')
                }, 1000);
            }
            if(error){
                handleerror(error.detalis[0].message)
            }
            if(!success){
                handleerror(message)
            }
            console.log(result)
        }
        catch (err) {
            handleerror(err);
        }
    };
    return (
        <>
            <div className="background1">
                <div className="form-container1">
                    <div className="image1">
                        <img src={gameimg} alt="Game" />
                    </div>
                    <div className="form1">
                        <h1>GameZone</h1>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="inputs" >
                                <input type="text" placeholder='Username' value={signupinfo.username} onChange={(e) =>
                                    setSignupinfo({ ...signupinfo, username: e.target.value })
                                } />
                                <input type="e-mail" placeholder='E-mail' onChange={(e) =>
                                    setSignupinfo({ ...signupinfo, email: e.target.value })
                                } />
                                <input type="password" value={signupinfo.password} onChange={(e) => {

                                    setSignupinfo({ ...signupinfo, password: e.target.value });
                                }}
                                     placeholder='password' />

                                <input type="password" value={signupinfo.confirmPassword} onChange={(e)=>{setSignupinfo({...signupinfo,confirmPassword: e.target.value})}}  placeholder='confirm password' />

                            </div>
                            <button className='signupbtn'>Sign Up</button>
                            <div className="log"><p>Already have an account?<Link to='/login' >Log in</Link></p></div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup
