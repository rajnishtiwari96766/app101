import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
const Navbar=()=> {
  return (
    <div className='navbar'>
        <span className='logo'>Chat box</span>
        <div className="user">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU' alt='Loading' />
            <span>Rajnish</span>
            {/* this onclick will help you to login and Logout */}
            <button onClick={()=>signOut(auth)}>Logout </button> 
        </div>
    </div>
  )
}

export default Navbar