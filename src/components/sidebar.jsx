import React from 'react'
import Navbar from './navbar'
import Searchbar from './searchbar'
import Chats from './chats'

function  Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Searchbar/>
      <Chats/>
    </div>
  )
}

export default  Sidebar