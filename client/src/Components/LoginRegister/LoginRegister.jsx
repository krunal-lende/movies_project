import React, { useContext, useState } from 'react'
import "./LoginRegister.css"
import { FaUser,FaLock,FaEnvelope,FaMobileAlt } from "react-icons/fa";
import  axios  from 'axios';
import { AppContex } from '../../App';


const LoginRegister = () => {
    const {setShowLogin}=useContext(AppContex)

    const [singup,setSingup]=useState({username:"",email:"",password:"",mob_no:""})
    const [login,setLogin]= useState({email:"",password:""});
 
    const [action,setAction]=useState('');

    const registerLink=()=>{
        setAction('active')
    };

    const LoginLink=()=>{
        setAction('')
    };

    const registerHandlar=(e)=>{
      const{name,value}=e.target ;
      setSingup({...singup,[name]:value})
//    console.log({...singup,[name]:value})
    }

    const sendToServer=async(event)=>{
        event.preventDefault()
    // console.log(singup)
try{
    const req =await axios.post("http://localhost:2024/registration/",singup)
   console.log(req)
    alert("register successfully")
}
catch(error){
    console.log(error)

}
    setSingup({username:"",email:"",password:"",mob_no:""})
    };

    const loginHandlar=(e)=>{
        const{name,value}=e.target;
        setLogin({...login,[name]:value})
    };

    const loginDataHandlar = async(event)=>{
        event.preventDefault()
        // console.log(login)
        
        try{
            const res = await axios.post("http://localhost:2024/login/",login)
            console.log(res.data)
            if(res.data.result === "Match"){
      alert("login done")
      setShowLogin(false)
            }
            else{
                alert("login fail, please check your email & password")
            }
        }
        catch(error){
            alert("Check your Email and Password")
            console.error(error)
        }
    }

  return (
    <div className="mainLogin">
    <div className={`wrapper ${action}`}>
        <div className="form-box login">
            <form onSubmit={loginDataHandlar}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email" name='email' value={login.email} onChange={loginHandlar} placeholder='Email' required />
                    <FaEnvelope className='icon ' />

                </div>
                <div className="input-box">
                    <input type="password"  name='password' value={login.password} onChange={loginHandlar} placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label ><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#" onClick={registerLink} >Register</a></p>
                </div>
            </form>
        </div>


        <div className="form-box register">
            <form onSubmit={sendToServer}>
                <h1>registration</h1>
                <div className="input-box">
                    <input type="text" name='username' value={singup.username} onChange={registerHandlar} placeholder='Username' required />
                    <FaUser className='icon ' />
                </div>

                <div className="input-box">
                    <input type="email" name='email' value={singup.email} onChange={registerHandlar} placeholder='Email' required />
                    <FaEnvelope className='icon ' />
                </div>
                <div className="input-box">
                    <input type="password" name='password' value={singup.password} onChange={registerHandlar} placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" name='mob_no' value={singup.mob_no} onChange={registerHandlar} placeholder='Mob no..' maxLength='10' required />
                    <FaMobileAlt className='icon' />
                </div>
                <div className="remember-forgot">
                    <label ><input type="checkbox" required/>I agree to the terms & conditions</label>
                   
                </div>
                <button type='submit'>Register</button>

                <div className="register-link">
                    <p>Already have an account? <a href="#" onClick={LoginLink} >Login</a></p>
                </div>
            </form>
        </div>

    </div>
    </div>
  )
}

export default LoginRegister