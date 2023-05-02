import React from 'react'

const Navbar=()=> {
  return (
    <div className='navbar'>
        <span className='logo'>Chat box</span>
        <div className="user">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU' alt='Loading' />
            <span>Rajnish</span>
            <button>Logout </button>
        </div>
    </div>
  )
}

export default Navbar