import React, { useState } from 'react'
import { auth } from '../firebase';
import { useNavigate ,Link} from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";

const Login=()=> {
  const [err,setErr]=useState(false);
  const navigate=useNavigate  ();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const email=e.target[1].value;
    const password=e.target[2].value;


    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    }catch(err){
      setErr(true);
    }
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='Logo'>Chat app</span>
        <span className='title'>Login</span>

        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}

        </form>
        <p>You do have an account? <Link to={"/register"}>Register</Link> </p>
      </div>
    </div>
  )
}

export default Login