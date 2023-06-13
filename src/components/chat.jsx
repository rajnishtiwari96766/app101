import React, { useContext } from 'react'
import Messages from './messages'
import Inputs from './inputs'
import { ChatContext } from '../context/ChatContext'
const Chat=()=> {
  const{data}=useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
      {/* {data.user?.displayName} */}
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <span><i class="fa-solid fa-video fa-lg"></i></span>
          <span><i class="fa-solid fa-user-plus"></i></span>
          <span><i class="fa-solid fa-bars"></i></span>  
        </div>
      </div>
        <Messages/>
        <Inputs/>
    </div>
  )
}

export default Chat