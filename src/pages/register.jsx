import React from 'react'
import '../style.scss'
const Register=()=> {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='Logo'>Chat app</span>
        <span className='title'>Register</span>

        <form>
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