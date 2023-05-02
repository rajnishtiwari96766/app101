import React from 'react'
import Messages from './messages'
const Chat=()=> {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Goluuu</span>
        <div className="chatIcons">
          <span><i class="fa-solid fa-video fa-lg"></i></span>
          <span><i class="fa-solid fa-user-plus"></i></span>
          <span><i class="fa-solid fa-bars"></i></span>
        </div>
        <Messages/>
      </div>
    </div>
  )
}

export default Chat