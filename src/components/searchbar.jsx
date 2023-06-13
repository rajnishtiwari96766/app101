import React, { useState,useContext } from 'react'
import { collection, query, where,getDocs, setDoc, serverTimestamp, getDoc, doc,updateDoc  } from "firebase/firestore";
import {AuthContext} from "../context/AuthContext"
import { db } from '../firebase'

const Searchbar = () => {
  const [username, setUserName] = useState("") //setusername will be updated when we update the searchbar
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const{currentUser}=useContext(AuthContext)
  const handleSearch = async () => {
    //query is basically used to handle the search
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    )

    try{
      //To get the user we need to take help to docs to getfetched by the query
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data()) //this will check whenever the user is present
      });
    }catch(err){
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect=async(u)=>{
    const combinedId= currentUser.uid>user.uid ? currentUser.uid+user.uid : user.uid+currentUser.uid;
    // dispatch({type:"Change_user",payload:u})
    // console.log(combinedId)
    // console.log(currentUser.uid)
    try{
      const res=await getDoc(doc(db,"chats",combinedId))

      if(!res.exists()){
        //creating chats
        await setDoc(doc(db,"chats",combinedId),{messages:[]})

        //create user chats
        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId +".userInfo"]:{
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })

        await updateDoc(doc(db,"userChats",user.uid),{
          [combinedId +".userInfo"]:{
            uid:currentUser.uid,
            displayName:currentUser.displayName,
            photoURL:currentUser.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })
      }
    }catch(err){}
    setUser(null)
    setUserName("")
  }
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find the user' onKeyDown={handleKey} onChange={e => setUserName(e.target.value)}
        value={username}
         />
        {/* onkeydown handles the keyboard actions and when we preess enter button
            it searches the user */}
      </div>

{err && <span>User not found</span>}
{/* the below case will be executed only if there is user present */}
     { user && <div className='userChat' onClick={handleSelect}>
        <img src={user.photoURL} alt=''></img>
        <div className='userChatInfo'>
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Searchbar 