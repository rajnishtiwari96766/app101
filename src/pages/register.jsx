import React from 'react'
import '../style.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth}  from '../firebase'
const Register=()=>   {

  const handleSubmit=(e)=>{
    e.preventDefault() //this prevents for the page getting reloaded again and again  
    // console.log(e.target[0].value)
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];


// const auth = getAuth(); 
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='Logo'>Chat app</span>
        <span className='title'>Register</span>

        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name'/>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          
          <input style={{display:"none"}}type='file' id='file'/>
          <label htmlFor='file'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&usqp=CAU' height={30} width={30} alt='loading'/>
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register