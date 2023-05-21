import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
const Navbar=()=> {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='navbar'>
        <span className='logo'>Chat box</span>
        <div className="user">
            <img src={currentUser.photoURL} alt='Loading' />
            <span>{currentUser.displayName}</span>
            {/* this onclick will help you to login and Logout */}
            <button onClick={()=>signOut(auth)}>Logout </button> 
        </div>
    </div>
  )
}

export default Navbar