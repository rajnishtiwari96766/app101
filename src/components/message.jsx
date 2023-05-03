import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU" alt="Loading..." />
        <span>Just now</span>
      </div>

      <div className="messageContent">
        <p>Hello!!!</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU" alt="" />
      </div>
    </div>
  )
}

export default Message