import React, { useState } from 'react'

const Searchbar=()=> {
  const[userName,setUserName]=useState("") //setusername will be updated when we update the searchbar
  const[user,setUser]=useState(null)
  const[err,setErr]=useState(false)

  const handleSearch=()=>{};

  const handleKey=(e)=>{
    e.code ==="Enter"  && handleSearch();
  }
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='find the user'onKeyDown={handleKey} onChange={e=>setUserName(e.target.value)}/>
            {/* onkeydown handles the keyboard actions and when we preess enter button
            it searches the user */}
        </div>

        <div className='userChat'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU'></img>
            <div className='userChatInfo'>
                <span>Goluuuu</span>
            </div>
        </div>
    </div>
  )
}

export default Searchbar