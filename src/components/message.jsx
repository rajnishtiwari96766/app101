import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message=({message})=> {
  const{currentUser}=useContext(AuthContext)
  const{data}=useContext(ChatContext)
  console.log(message)

  return (
    <div className='message owner'>
       */}
    </div>
  )
}

export default Message