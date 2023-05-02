import React from 'react'

function Searchbar() {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='find the user'/>
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