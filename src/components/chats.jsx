import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";

import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Chats=()=> {
    const[chats,setChats]=useState([])

    const{currentUser}=useContext(AuthContext)
    const{dispatch}=useContext(ChatContext)
    useEffect(()=>{
        const getchats=()=>{
            const unsub = onSnapshot(doc(db, "userChats",currentUser.uid), (doc) => {
                setChats(doc.data());
            });        
            return ()=>{
                unsub();
            }
        }
        currentUser.uid && getchats();
    },[currentUser.uid])


    const handleSelect=(u)=>{
        dispatch({type:"Change_user",payload: u})
    }
    // console.log(Object.entries(chats))
  return (
    <div className='chats'>
        {Object.entries(chats)?.map((chat)=>( 
         <div className='userChat' key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
            <img src={chat[1].userInfo.photoURL}></img>
            <div className='userChatInfo'>
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].userInfo.lastMessage?.text}</p>
            </div>
        </div> 
        ))}
    </div>
  )
}

export default Chats