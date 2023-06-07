import React, { useState } from 'react'
import { collection, query, where,getDocs } from "firebase/firestore";
import { db } from '../firebase'

const Searchbar = () => {
  const [userName, setUserName] = useState("") //setusername will be updated when we update the searchbar
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    //query is basically used to handle the search
    const q = query(
      collection(db, "user"),
      where("displayName", "==", userName)
    )

    try{
      //To get the user we need to take help to docs to getfetched by the query
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data()) //this will check whenever the user is present
      });
    }catch(err){
      setErr(true)
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find the user' onKeyDown={handleKey} onChange={e => setUserName(e.target.value)} />
        {/* onkeydown handles the keyboard actions and when we preess enter button
            it searches the user */}
      </div>

{err && <span>User not found</span>}
{/* the below case will be executed only if there is user present */}
     { user && <div className='userChat'>
        <img src={user.photoURL} alt=''></img>
        <div className='userChatInfo'>
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Searchbar